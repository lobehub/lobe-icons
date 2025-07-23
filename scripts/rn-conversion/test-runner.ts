#!/usr/bin/env npx tsx
import { execSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

interface TestResult {
  build: 'success' | 'error' | 'pending';
  conversion: 'success' | 'error' | 'pending';
  error?: string;
  export: 'success' | 'error' | 'pending';
  icon: string;
}

interface BatchResult {
  batchNumber: number;
  duration?: number;
  endTime?: Date;
  icons: string[];
  overallStatus: 'success' | 'partial' | 'failed';
  results: TestResult[];
  startTime: Date;
}

// 获取所有图标列表
function getAllIcons(): string[] {
  const srcDir = join(process.cwd(), '../../src');
  try {
    const result = execSync(`find ${srcDir} -maxdepth 1 -type d | grep -v "^${srcDir}$" | sort`, {
      encoding: 'utf8',
    });
    return result
      .trim()
      .split('\n')
      .map((path) => path.replace(`${srcDir}/`, ''))
      .filter(
        (name) => !['components', 'features', 'hooks', 'platform', 'types', 'utils'].includes(name),
      );
  } catch (error) {
    console.error('❌ 获取图标列表失败:', error);
    return [];
  }
}

// 运行命令并捕获结果
function runCommand(command: string, cwd?: string): { output: string; success: boolean } {
  try {
    const output = execSync(command, {
      cwd: cwd || process.cwd(),
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    return { output, success: true };
  } catch (error: any) {
    return { output: error.message, success: false };
  }
}

// 测试单个批次
async function testBatch(batchNumber: number, icons: string[]): Promise<BatchResult> {
  console.log(`\n🚀 开始测试 Batch ${batchNumber}: ${icons.join(', ')}`);
  console.log(`📊 图标数量: ${icons.length}`);

  const batchResult: BatchResult = {
    batchNumber,
    icons,
    overallStatus: 'success',
    results: [],
    startTime: new Date(),
  };

  // 初始化结果
  for (const icon of icons) {
    batchResult.results.push({
      build: 'pending',
      conversion: 'pending',
      export: 'pending',
      icon,
    });
  }

  console.log('\n🔄 步骤 1: 运行图标转换...');
  const conversionCmd = `npx tsx scripts/rn-conversion/batch-converter.ts ${icons.join(' ')}`;
  const conversionResult = runCommand(conversionCmd, join(process.cwd(), '../..'));

  if (conversionResult.success) {
    console.log('✅ 图标转换成功');
    batchResult.results.forEach((r) => (r.conversion = 'success'));
  } else {
    console.log('❌ 图标转换失败');
    console.log(conversionResult.output);
    batchResult.results.forEach((r) => {
      r.conversion = 'error';
      r.error = conversionResult.output;
    });
    batchResult.overallStatus = 'failed';
    return batchResult;
  }

  console.log('\n🔄 步骤 2: 更新导出文件...');
  const exportCmd = `npx tsx scripts/rn-conversion/export-updater.ts`;
  const exportResult = runCommand(exportCmd, join(process.cwd(), '../..'));

  if (exportResult.success) {
    console.log('✅ 导出文件更新成功');
    batchResult.results.forEach((r) => (r.export = 'success'));
  } else {
    console.log('❌ 导出文件更新失败');
    console.log(exportResult.output);
    batchResult.results.forEach((r) => {
      r.export = 'error';
      r.error = r.error ? `${r.error}\n${exportResult.output}` : exportResult.output;
    });
    batchResult.overallStatus = 'failed';
    return batchResult;
  }

  console.log('\n🔄 步骤 3: 运行构建测试...');
  const buildCmd = `npm run build`;
  const buildResult = runCommand(buildCmd, join(process.cwd(), '../../packages/react-native'));

  if (buildResult.success) {
    console.log('✅ 构建测试成功');
    batchResult.results.forEach((r) => (r.build = 'success'));
  } else {
    console.log('❌ 构建测试失败');
    console.log(buildResult.output);
    batchResult.results.forEach((r) => {
      r.build = 'error';
      r.error = r.error ? `${r.error}\n${buildResult.output}` : buildResult.output;
    });
    batchResult.overallStatus = 'partial';
  }

  batchResult.endTime = new Date();
  batchResult.duration = batchResult.endTime.getTime() - batchResult.startTime.getTime();

  return batchResult;
}

// 生成测试报告
function generateReport(batchResult: BatchResult): string {
  const { batchNumber, icons, results, startTime, endTime, duration, overallStatus } = batchResult;

  const statusEmoji = {
    error: '❌',
    pending: '⏳',
    success: '✅',
  };

  const overallEmoji = {
    failed: '❌',
    partial: '⚠️',
    success: '✅',
  };

  let report = `\n${overallEmoji[overallStatus]} Batch ${batchNumber} 测试报告\n`;
  report += `==========================================\n`;
  report += `📅 开始时间: ${startTime.toLocaleString()}\n`;
  report += `📅 结束时间: ${endTime?.toLocaleString()}\n`;
  report += `⏱️  耗时: ${duration ? Math.round(duration / 1000) : 0} 秒\n`;
  report += `📊 图标总数: ${icons.length}\n`;
  report += `📈 整体状态: ${overallStatus.toUpperCase()}\n\n`;

  report += `详细结果:\n`;
  report += `| 图标 | 转换 | 导出 | 构建 | 备注 |\n`;
  report += `|------|------|------|------|------|\n`;

  for (const result of results) {
    const conversionStatus = statusEmoji[result.conversion];
    const exportStatus = statusEmoji[result.export];
    const buildStatus = statusEmoji[result.build];
    const note = result.error ? '有错误' : '';

    report += `| ${result.icon} | ${conversionStatus} | ${exportStatus} | ${buildStatus} | ${note} |\n`;
  }

  if (results.some((r) => r.error)) {
    report += `\n错误详情:\n`;
    for (const result of results) {
      if (result.error) {
        report += `\n❌ ${result.icon}:\n`;
        report += `${result.error}\n`;
      }
    }
  }

  return report;
}

// 更新测试日志文档
function updateTestLog(batchResult: BatchResult): void {
  const logPath = join(process.cwd(), '../../docs/rn-conversion-test-log.md');

  if (!existsSync(logPath)) {
    console.log('⚠️ 测试日志文件不存在，跳过更新');
    return;
  }

  try {
    let content = readFileSync(logPath, 'utf8');

    // 更新批次状态统计
    const currentDate = new Date().toLocaleDateString();
    const statusEmoji =
      batchResult.overallStatus === 'success'
        ? '✅'
        : batchResult.overallStatus === 'partial'
          ? '⚠️'
          : '❌';

    // 查找并替换对应批次的状态
    const batchSection = `### Batch ${batchResult.batchNumber} ⏳ (计划中)`;
    const newBatchSection = `### Batch ${batchResult.batchNumber} ${statusEmoji} (${batchResult.overallStatus})`;

    if (content.includes(batchSection)) {
      content = content.replace(batchSection, newBatchSection);
      content = content.replace(`**测试日期**: _待填写_`, `**测试日期**: ${currentDate}`);

      // 更新测试结果表格
      for (const result of batchResult.results) {
        const iconRow = `| ${result.icon} | ⏳ | ⏳ | ⏳ | |`;
        const conversionEmoji =
          result.conversion === 'success' ? '✅' : result.conversion === 'error' ? '❌' : '⏳';
        const exportEmoji =
          result.export === 'success' ? '✅' : result.export === 'error' ? '❌' : '⏳';
        const buildEmoji =
          result.build === 'success' ? '✅' : result.build === 'error' ? '❌' : '⏳';
        const note = result.error ? '有错误' : '';
        const newIconRow = `| ${result.icon} | ${conversionEmoji} | ${exportEmoji} | ${buildEmoji} | ${note} |`;

        content = content.replace(iconRow, newIconRow);
      }
    }

    writeFileSync(logPath, content);
    console.log('📝 测试日志已更新');
  } catch (error) {
    console.error('❌ 更新测试日志失败:', error);
  }
}

// 主函数
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
🧪 React Native Icons 测试运行器

用法:
  node test-runner.ts <batch-number>              # 测试指定批次
  node test-runner.ts --custom Icon1 Icon2...     # 测试自定义图标列表
  node test-runner.ts --list                      # 显示所有批次

示例:
  node test-runner.ts 1                           # 测试 Batch 1
  node test-runner.ts --custom Anthropic Claude   # 测试指定图标
    `);
    return;
  }

  const allIcons = getAllIcons();
  console.log(`📊 发现 ${allIcons.length} 个图标`);

  if (args[0] === '--list') {
    // 显示所有批次
    const batchSize = 10;
    const totalBatches = Math.ceil(allIcons.length / batchSize);

    console.log(`\n📋 批次列表 (每批次 ${batchSize} 个图标):\n`);
    for (let i = 0; i < totalBatches; i++) {
      const start = i * batchSize;
      const end = Math.min(start + batchSize, allIcons.length);
      const batchIcons = allIcons.slice(start, end);
      console.log(`Batch ${i + 1}: ${batchIcons.join(', ')}`);
    }
    return;
  }

  if (args[0] === '--custom') {
    // 测试自定义图标列表
    const customIcons = args.slice(1);
    if (customIcons.length === 0) {
      console.error('❌ 请指定要测试的图标名称');
      return;
    }

    // 验证图标是否存在
    const invalidIcons = customIcons.filter((icon) => !allIcons.includes(icon));
    if (invalidIcons.length > 0) {
      console.error(`❌ 以下图标不存在: ${invalidIcons.join(', ')}`);
      return;
    }

    console.log(`🎯 自定义测试: ${customIcons.join(', ')}`);
    const batchResult = await testBatch(0, customIcons);
    const report = generateReport(batchResult);
    console.log(report);
    return;
  }

  // 测试指定批次
  const batchNumber = parseInt(args[0]);
  if (isNaN(batchNumber) || batchNumber < 1) {
    console.error('❌ 请指定有效的批次号 (1-23)');
    return;
  }

  const batchSize = 10;
  const start = (batchNumber - 1) * batchSize;
  const end = Math.min(start + batchSize, allIcons.length);

  if (start >= allIcons.length) {
    console.error(
      `❌ 批次 ${batchNumber} 超出范围，最大批次号: ${Math.ceil(allIcons.length / batchSize)}`,
    );
    return;
  }

  const batchIcons = allIcons.slice(start, end);
  const batchResult = await testBatch(batchNumber, batchIcons);

  // 生成并显示报告
  const report = generateReport(batchResult);
  console.log(report);

  // 更新测试日志
  updateTestLog(batchResult);

  // 保存详细报告到文件
  const reportPath = join(process.cwd(), `../../docs/batch-${batchNumber}-report.md`);
  writeFileSync(reportPath, report);
  console.log(`📄 详细报告已保存: docs/batch-${batchNumber}-report.md`);
}

// eslint-disable-next-line unicorn/prefer-top-level-await
main().catch((error) => {
  console.error('❌ 测试运行器执行失败:', error.message);
  throw error;
});
