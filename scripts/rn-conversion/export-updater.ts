#!/usr/bin/env npx tsx
import { promises as fs } from 'node:fs';
import path from 'node:path';

/**
 * 简单的导出文件更新器
 * 扫描已转换的图标并更新主导出文件
 */
async function updateExports() {
  const iconsDir = '../../packages/react-native/src/icons';
  const outputFile = '../../packages/react-native/src/index.ts';

  // 获取所有图标目录
  const iconDirs = await fs.readdir(path.resolve(__dirname, iconsDir));
  const validIcons: string[] = [];

  // 验证每个目录是否有index.ts
  for (const iconName of iconDirs) {
    try {
      const indexPath = path.resolve(__dirname, iconsDir, iconName, 'index.ts');
      await fs.access(indexPath);
      validIcons.push(iconName);
    } catch {
      // 跳过无效目录
    }
  }

  validIcons.sort();

  // 生成导出内容
  const exports = validIcons
    .map(
      (iconName) =>
        `export { default as ${iconName}, type CompoundedIcon as ${iconName}Props } from "./icons/${iconName}";`,
    )
    .join('\n');

  const content = `// React Native Icons Package
// Export all available RN icon components

// Export icon components
${exports}

// Export types
export type {
  CompoundedIcon,
  RNIconAvatarProps,
  RNIconCombineProps,
  RNIconProps,
  RNIconTextProps,
} from "./types";
`;

  // 写入文件
  await fs.writeFile(path.resolve(__dirname, outputFile), content);

  console.log(`✅ 导出文件已更新`);
  console.log(`📦 导出 ${validIcons.length} 个图标: ${validIcons.join(', ')}`);
}

// 执行
// eslint-disable-next-line unicorn/prefer-top-level-await
updateExports().catch((error) => {
  console.error(error.message);
  throw error;
});
