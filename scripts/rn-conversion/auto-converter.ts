#!/usr/bin/env npx tsx
import { execSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import FeatureConfigSyncer from './feature-config-syncer';
import { formatGeneratedFiles } from './utils/formatter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface ConversionStats {
  alreadyConverted: string[];
  converted: string[];
  failed: string[];
  notFound: string[];
  pending: string[];
  skipped: string[];
  total: number;
}

interface ConversionOptions {
  buildTest?: boolean;
  dryRun?: boolean;
  forceUpdate?: boolean;
  lintCheck?: boolean;
  maxIcons?: number;
  skipExisting?: boolean;
}

class AutoConverter {
  private projectRoot: string;
  private srcDir: string;
  private rnIconsDir: string;
  private stats: ConversionStats;

  constructor() {
    this.projectRoot = join(__dirname, '../../');
    this.srcDir = join(this.projectRoot, 'src');
    this.rnIconsDir = join(this.projectRoot, 'packages/react-native/src/icons');
    this.stats = {
      alreadyConverted: [],
      converted: [],
      failed: [],
      notFound: [],
      pending: [],
      skipped: [],
      total: 0,
    };
  }

  // 获取所有Web图标
  private getAllWebIcons(): string[] {
    try {
      return readdirSync(this.srcDir)
        .filter((name) => {
          const iconPath = join(this.srcDir, name);
          const componentsPath = join(iconPath, 'components');
          // 过滤掉非图标目录
          const excludeDirs = ['components', 'features', 'hooks', 'platform', 'types', 'utils'];
          return !excludeDirs.includes(name) && existsSync(componentsPath);
        })
        .sort();
    } catch (error) {
      console.error('❌ 获取Web图标列表失败:', error);
      return [];
    }
  }

  // 获取所有已转换的RN图标
  private getConvertedRNIcons(): string[] {
    try {
      if (!existsSync(this.rnIconsDir)) {
        return [];
      }
      return readdirSync(this.rnIconsDir)
        .filter((name) => {
          const iconPath = join(this.rnIconsDir, name);
          const indexPath = join(iconPath, 'index.ts');
          return existsSync(indexPath);
        })
        .sort();
    } catch (error) {
      console.error('❌ 获取RN图标列表失败:', error);
      return [];
    }
  }

  // 检测图标转换状态
  private analyzeConversionStatus(options: ConversionOptions) {
    console.log('🔍 分析图标转换状态...\n');

    const webIcons = this.getAllWebIcons();
    const rnIcons = new Set(this.getConvertedRNIcons());

    this.stats.total = webIcons.length;

    if (options.forceUpdate) {
      // 强制模式：转换所有图标
      this.stats.pending = [...webIcons];
      this.stats.alreadyConverted = [];
    } else {
      // 正常模式：只转换未转换的图标
      this.stats.pending = webIcons.filter((icon) => !rnIcons.has(icon));
      this.stats.alreadyConverted = webIcons.filter((icon) => rnIcons.has(icon));
    }

    // 如果设置了最大转换数量，只转换前N个
    if (options.maxIcons && options.maxIcons > 0) {
      this.stats.pending = this.stats.pending.slice(0, options.maxIcons);
      // 如果是强制模式，需要重新计算已转换的数量
      if (options.forceUpdate) {
        const remainingIcons = webIcons.slice(options.maxIcons);
        this.stats.alreadyConverted = remainingIcons.filter((icon) => rnIcons.has(icon));
      }
    }

    console.log('📊 转换状态分析:');
    console.log(`📦 总图标数: ${this.stats.total}`);
    console.log(`✅ 已转换: ${this.stats.alreadyConverted.length}`);
    console.log(`⏳ 待转换: ${this.stats.pending.length}`);
    console.log('');

    if (this.stats.pending.length === 0) {
      console.log('🎉 所有图标已转换完成！');
      return false;
    }

    console.log('📝 待转换图标列表:');
    this.stats.pending.forEach((icon, index) => {
      console.log(`${index + 1}. ${icon}`);
    });
    console.log('');

    return true;
  }

  // 运行批量转换
  private async runBatchConversion(options: ConversionOptions): Promise<boolean> {
    if (this.stats.pending.length === 0) {
      return true;
    }

    console.log(`🚀 开始转换 ${this.stats.pending.length} 个图标...\n`);

    if (options.dryRun) {
      console.log('🔄 预演模式：不会实际转换文件');
      this.stats.converted = [...this.stats.pending];
      return true;
    }

    try {
      // 调用批量转换器
      const iconsToConvert = this.stats.pending.join(' ');
      const command = `npx tsx batch-converter.ts ${iconsToConvert}`;

      console.log(`📝 执行命令: ${command}`);

      execSync(command, {
        cwd: __dirname,
        encoding: 'utf8',
        stdio: 'inherit',
      });

      this.stats.converted = [...this.stats.pending];
      console.log('\n✅ 批量转换完成');
      return true;
    } catch (error) {
      console.error('❌ 批量转换失败:', error);
      this.stats.failed = [...this.stats.pending];
      return false;
    }
  }

  // 更新导出文件
  private async updateExports(options: ConversionOptions): Promise<boolean> {
    console.log('\n📦 更新导出文件...');

    if (options.dryRun) {
      console.log('🔄 预演模式：不会实际更新导出文件');
      return true;
    }

    try {
      const command = 'npx tsx export-updater.ts';

      execSync(command, {
        cwd: __dirname,
        encoding: 'utf8',
        stdio: 'inherit',
      });

      console.log('✅ 导出文件更新完成');
      return true;
    } catch (error) {
      console.error('❌ 导出文件更新失败:', error);
      return false;
    }
  }

  // 同步特性配置文件
  private async syncFeatureConfigs(options: ConversionOptions): Promise<boolean> {
    if (options.dryRun) {
      console.log('\n🔄 预演模式：不会实际同步配置文件');
      return true;
    }

    try {
      const syncer = new FeatureConfigSyncer();
      // 统一在 formatOutput 中格式化
      const success = await syncer.syncAll({ format: false });
      return success;
    } catch (error) {
      console.error('❌ 配置文件同步失败:', error);
      return false;
    }
  }

  // 格式化生成的文件
  private async formatOutput(options: ConversionOptions): Promise<boolean> {
    console.log('\n🎨 格式化生成的文件...');

    if (options.dryRun) {
      console.log('🔄 预演模式：不会实际格式化文件');
      return true;
    }

    try {
      const rnSrcDir = join(this.projectRoot, 'packages/react-native/src');
      const files = formatGeneratedFiles(this.projectRoot, [
        ...this.stats.converted.map((icon) => join(this.rnIconsDir, icon)),
        join(rnSrcDir, 'index.ts'),
        ...new FeatureConfigSyncer().targetFiles,
      ]);

      console.log(`✅ 已格式化 ${files.length} 个文件`);
      return true;
    } catch (error) {
      console.error('❌ 格式化失败:', error);
      return false;
    }
  }

  // 运行构建测试
  private async runBuildTest(options: ConversionOptions): Promise<boolean> {
    if (!options.buildTest) {
      return true;
    }

    console.log('\n🧪 运行构建测试...');

    if (options.dryRun) {
      console.log('🔄 预演模式：不会实际运行构建测试');
      return true;
    }

    try {
      const command = 'npm run build';

      execSync(command, {
        cwd: join(this.projectRoot, 'packages/react-native'),
        encoding: 'utf8',
        stdio: 'inherit',
      });

      console.log('✅ 构建测试通过');
      return true;
    } catch (error) {
      console.error('❌ 构建测试失败:', error);
      return false;
    }
  }

  // 运行代码检查
  private async runLintCheck(options: ConversionOptions): Promise<boolean> {
    if (!options.lintCheck) {
      return true;
    }

    console.log('\n🔧 运行代码检查...');

    if (options.dryRun) {
      console.log('🔄 预演模式：不会实际运行代码检查');
      return true;
    }

    try {
      const command = 'npm run lint';

      execSync(command, {
        cwd: join(this.projectRoot, 'packages/react-native'),
        encoding: 'utf8',
        stdio: 'inherit',
      });

      console.log('✅ 代码检查通过');
      return true;
    } catch (error) {
      console.error('❌ 代码检查失败:', error);
      console.log('💡 可以尝试运行 npm run lint:fix 自动修复部分问题');
      return false;
    }
  }

  // 显示最终统计
  private showFinalStats() {
    console.log('\n📊 转换完成统计:');
    console.log(`📦 总图标数: ${this.stats.total}`);
    console.log(`✅ 本次转换: ${this.stats.converted.length}`);
    console.log(`❌ 转换失败: ${this.stats.failed.length}`);
    console.log(`⏭️  已跳过: ${this.stats.skipped.length}`);
    console.log(`🔄 已存在: ${this.stats.alreadyConverted.length}`);

    if (this.stats.failed.length > 0) {
      console.log('\n❌ 失败的图标:');
      this.stats.failed.forEach((icon) => console.log(`  - ${icon}`));
    }

    if (this.stats.converted.length > 0) {
      console.log('\n✅ 成功转换的图标:');
      this.stats.converted.slice(0, 10).forEach((icon) => console.log(`  - ${icon}`));
      if (this.stats.converted.length > 10) {
        console.log(`  ... 还有 ${this.stats.converted.length - 10} 个图标`);
      }
    }
  }

  // 主执行函数
  async execute(options: ConversionOptions = {}): Promise<boolean> {
    const startTime = Date.now();

    console.log('🚀 Lobe Icons 自动转换器');
    console.log('================================\n');

    // 分析转换状态
    const hasWork = this.analyzeConversionStatus(options);

    if (!hasWork) {
      return true;
    }

    let success = true;

    // 执行转换流程
    if (success) {
      success = await this.runBatchConversion(options);
    }

    if (success) {
      success = await this.updateExports(options);
    }

    if (success) {
      success = await this.syncFeatureConfigs(options);
    }

    if (success) {
      success = await this.formatOutput(options);
    }

    if (success && options.lintCheck) {
      success = await this.runLintCheck(options);
    }

    if (success && options.buildTest) {
      success = await this.runBuildTest(options);
    }

    // 显示统计
    this.showFinalStats();

    const duration = Date.now() - startTime;
    console.log(`\n⏱️  总耗时: ${(duration / 1000).toFixed(2)}秒`);

    if (success) {
      console.log('\n🎉 自动转换完成！');
    } else {
      console.log('\n💥 转换过程中出现错误');
    }

    return success;
  }
}

// 显示帮助信息
function showHelp() {
  console.log(`
🚀 Lobe Icons 自动转换器

用法:
  npx tsx auto-converter.ts [选项]

选项:
  -n, --dry-run     预演模式，不实际执行转换
  -t, --build-test  转换后运行构建测试
  -l, --lint        转换后运行代码检查
  -f, --force       强制更新，包括已存在的图标
  -m, --max <数量>  限制转换的图标数量
  -h, --help        显示帮助信息

示例:
  npx tsx auto-converter.ts                    # 转换所有未转换的图标
  npx tsx auto-converter.ts --dry-run          # 预览要转换的图标
  npx tsx auto-converter.ts --max 10           # 只转换前10个图标
  npx tsx auto-converter.ts --lint             # 转换后运行代码检查
  npx tsx auto-converter.ts --build-test       # 转换后运行构建测试
  npx tsx auto-converter.ts --lint --build-test # 转换后运行代码检查和构建测试
  npx tsx auto-converter.ts --force            # 强制重新转换所有图标
`);
}

// 命令行参数解析
function parseArgs(): ConversionOptions {
  const args = process.argv.slice(2);
  const options: ConversionOptions = {
    buildTest: false,
    dryRun: false,
    forceUpdate: false,
    lintCheck: false,
    skipExisting: true,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    switch (arg) {
      case '--dry-run':
      case '-n': {
        options.dryRun = true;
        break;
      }
      case '--build-test':
      case '-t': {
        options.buildTest = true;
        break;
      }
      case '--lint':
      case '-l': {
        options.lintCheck = true;
        break;
      }
      case '--force':
      case '-f': {
        options.forceUpdate = true;
        options.skipExisting = false;
        break;
      }
      case '--max':
      case '-m': {
        const maxValue = args[i + 1];
        if (maxValue && !isNaN(Number(maxValue))) {
          options.maxIcons = Number(maxValue);
          i++; // 跳过下一个参数
        }
        break;
      }
      case '--help':
      case '-h': {
        showHelp();
        process.exit(0);
        break;
      }
    }
  }

  return options;
}

// 主函数
async function main() {
  try {
    const options = parseArgs();
    const converter = new AutoConverter();
    const success = await converter.execute(options);

    process.exit(success ? 0 : 1);
  } catch (error) {
    console.error('💥 执行失败:', error);
    process.exit(1);
  }
}

// eslint-disable-next-line unicorn/prefer-top-level-await
main().catch((error) => {
  console.error('❌ 主函数执行失败:', error);
  process.exit(1);
});
