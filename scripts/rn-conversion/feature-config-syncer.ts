#!/usr/bin/env npx tsx
import { promises as fs } from 'node:fs';
import path from 'node:path';

import { formatGeneratedFiles } from './utils/formatter';

/**
 * 特性配置文件同步器
 * 将 web 版本的配置文件转换为 React Native 版本
 */

interface ConfigFile {
  name: string;
  sourceFile: string;
  targetFile: string;
}

class FeatureConfigSyncer {
  private projectRoot: string;
  private configFiles: ConfigFile[];

  constructor() {
    this.projectRoot = path.resolve(__dirname, '../../');
    this.configFiles = [
      {
        name: 'modelConfig.ts',
        sourceFile: path.join(this.projectRoot, 'src/features/modelConfig.ts'),
        targetFile: path.join(
          this.projectRoot,
          'packages/react-native/src/features/modelConfig.ts',
        ),
      },
      {
        name: 'providerEnum.ts',
        sourceFile: path.join(this.projectRoot, 'src/features/providerEnum.ts'),
        targetFile: path.join(
          this.projectRoot,
          'packages/react-native/src/features/providerEnum.ts',
        ),
      },
      {
        name: 'providerConfig.tsx',
        sourceFile: path.join(this.projectRoot, 'src/features/providerConfig.tsx'),
        targetFile: path.join(
          this.projectRoot,
          'packages/react-native/src/features/providerConfig.tsx',
        ),
      },
    ];
  }

  /**
   * 同步写入的 RN 目标文件
   */
  get targetFiles(): string[] {
    return this.configFiles.map((config) => config.targetFile);
  }

  /**
   * 转换配置文件内容
   */
  private transformContent(content: string, fileName: string): string {
    let transformed = content;

    // 1. 转换导入路径：@/IconName → ../icons/IconName
    transformed = transformed.replaceAll(/from '@\/([A-Z][\dA-Za-z]*)'/g, "from '../icons/$1'");

    // 2. 转换类型名称
    // ModelProvider → RNModelProvider (枚举定义)
    transformed = transformed.replaceAll(
      /export enum ModelProvider\s*{/g,
      'export enum RNModelProvider {',
    );

    // ModelProviderKey → RNModelProviderKey (类型定义)
    transformed = transformed.replaceAll(
      /export type ModelProviderKey\s*=/g,
      'export type RNModelProviderKey =',
    );

    // ModelMapping → RNModelMapping (接口和类型)
    transformed = transformed.replaceAll(/\bModelMapping\b/g, 'RNModelMapping');

    // ProviderMapping → RNProviderMapping (接口和类型)
    transformed = transformed.replaceAll(/\bProviderMapping\b/g, 'RNProviderMapping');

    // ModelProvider 引用 → RNModelProvider (在使用的地方)
    // 处理 typeof ModelProvider 的情况
    transformed = transformed.replaceAll('typeof ModelProvider', 'typeof RNModelProvider');
    // 处理 ModelProvider. 的情况
    transformed = transformed.replaceAll(/\bModelProvider\./g, 'RNModelProvider.');
    // 处理导入的情况
    transformed = transformed.replaceAll('{ ModelProvider }', '{ RNModelProvider }');
    transformed = transformed.replaceAll("from './providerEnum'", "from './providerEnum'");

    // 3. 转换类型导入和使用
    // IconType → RNIconProps
    transformed = transformed.replaceAll(/\bIconType\b/g, 'RNIconProps');

    // IconAvatarProps → RNIconAvatarProps
    transformed = transformed.replaceAll(/\bIconAvatarProps\b/g, 'RNIconAvatarProps');

    // IconCombineProps → RNIconCombineProps
    transformed = transformed.replaceAll(/\bIconCombineProps\b/g, 'RNIconCombineProps');

    // 确保类型名称带有 RN 前缀
    if (fileName === 'modelConfig.ts') {
      // ModelIconType → RNModelIconType
      transformed = transformed.replaceAll('type ModelIconType = ', 'type RNModelIconType = ');
      transformed = transformed.replaceAll('Icon: ModelIconType;', 'Icon: RNModelIconType;');
    }

    if (fileName === 'providerConfig.tsx') {
      // ProviderIconType → RNProviderIconType
      transformed = transformed.replaceAll(
        'type ProviderIconType = ',
        'type RNProviderIconType = ',
      );
      transformed = transformed.replaceAll('Icon: ProviderIconType;', 'Icon: RNProviderIconType;');
    }

    // 4. 转换导出变量名
    transformed = transformed.replaceAll(
      'export const modelMappings:',
      'export const rnModelMappings:',
    );
    transformed = transformed.replaceAll(
      'export const providerMappings:',
      'export const rnProviderMappings:',
    );

    // 5. 特殊导入处理
    // 移除 @lobehub/ui 的 DivProps 导入
    transformed = transformed.replaceAll(
      /import\s*{\s*DivProps\s*}\s*from\s*'@lobehub\/ui';\s*\n/g,
      '',
    );

    // 移除 DivProps 类型引用
    transformed = transformed.replaceAll(/\bDivProps\s*&\s*/g, '');

    // 调整类型导入路径
    transformed = transformed.replaceAll("from '@/features/IconAvatar'", "from './IconAvatar'");
    transformed = transformed.replaceAll("from '@/features/IconCombine'", "from './IconCombine'");
    transformed = transformed.replaceAll("from '@/types'", "from './types'");

    // 处理特殊的导入语句
    if (fileName === 'modelConfig.ts') {
      // 添加 React Native 特有的注释
      transformed = transformed.replaceAll(
        "import { FC } from 'react';",
        "import { FC } from 'react';\n",
      );
    } else if (fileName === 'providerConfig.tsx') {
      // 移除 memo 导入中的多余部分
      transformed = transformed.replaceAll(
        /import\s*{\s*FC,\s*memo\s*}\s*from\s*'react';/g,
        "import { FC, memo } from 'react';",
      );
    }

    // 6. 修复特定的导入语句格式
    // 处理 Kwaipilot 的特殊导入 - 从 @/icons 改为直接导入
    transformed = transformed.replaceAll(
      "import { Kwaipilot } from '@/icons';",
      "import Kwaipilot from '../icons/Kwaipilot';",
    );

    // 移除转换后多余的类型导入行
    // 这些在步骤5的路径转换后会变成 './IconAvatar' 和 './IconCombine'
    transformed = transformed.replaceAll(
      "import type { RNIconAvatarProps } from './IconAvatar';\n",
      '',
    );
    transformed = transformed.replaceAll(
      "import type { RNIconCombineProps } from './IconCombine';\n",
      '',
    );
    transformed = transformed.replaceAll("import type { RNIconProps } from './types';\n", '');

    // 7. 统一添加类型导入
    if (fileName === 'modelConfig.ts') {
      // 在 Kwaipilot 导入后添加统一的类型导入
      transformed = transformed.replaceAll(
        "import Kwaipilot from '../icons/Kwaipilot';",
        "import Kwaipilot from '../icons/Kwaipilot';\nimport type { RNIconAvatarProps, RNIconCombineProps, RNIconProps } from './types';",
      );
    } else if (fileName === 'providerConfig.tsx') {
      // 在 Combine 导入之前添加统一的类型导入
      transformed = transformed.replaceAll(
        "import Combine from './ProviderCombine/Combine';",
        "import type { RNIconAvatarProps, RNIconCombineProps, RNIconProps } from './types';\nimport Combine from './ProviderCombine/Combine';",
      );
    }

    return transformed;
  }

  /**
   * 同步单个配置文件
   */
  private async syncFile(config: ConfigFile): Promise<boolean> {
    try {
      console.log(`📝 同步 ${config.name}...`);

      // 读取源文件
      const content = await fs.readFile(config.sourceFile, 'utf8');

      // 转换内容
      const transformed = this.transformContent(content, config.name);

      // 写入目标文件
      await fs.writeFile(config.targetFile, transformed, 'utf8');

      console.log(`✅ ${config.name} 同步完成`);
      return true;
    } catch (error) {
      console.error(`❌ ${config.name} 同步失败:`, error);
      return false;
    }
  }

  /**
   * 格式化生成的文件
   */
  private formatFiles(): boolean {
    try {
      console.log('\n🎨 格式化生成的文件...');
      formatGeneratedFiles(this.projectRoot, this.targetFiles);
      console.log('✅ 格式化完成');
      return true;
    } catch (error) {
      console.error('❌ 格式化失败:', error);
      return false;
    }
  }

  /**
   * 同步所有配置文件
   */
  async syncAll(options: { format?: boolean } = {}): Promise<boolean> {
    console.log('\n🔄 开始同步特性配置文件...\n');

    const results = await Promise.all(this.configFiles.map((config) => this.syncFile(config)));

    const allSuccess = results.every(Boolean);

    if (allSuccess) {
      console.log('\n✅ 所有配置文件同步完成');

      // 格式化生成的文件
      if (options.format !== false) {
        return this.formatFiles();
      }
    } else {
      console.log('\n❌ 部分配置文件同步失败');
    }

    return allSuccess;
  }
}

// 主函数
async function main() {
  try {
    const syncer = new FeatureConfigSyncer();
    const success = await syncer.syncAll();
    process.exit(success ? 0 : 1);
  } catch (error) {
    console.error('💥 执行失败:', error);
    process.exit(1);
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  // eslint-disable-next-line unicorn/prefer-top-level-await
  main().catch((error) => {
    console.error('❌ 主函数执行失败:', error);
    process.exit(1);
  });
}

// 导出类供其他脚本使用
export default FeatureConfigSyncer;
