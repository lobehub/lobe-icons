# React Native 图标转换方案

## 项目概述

将 lobe-icons 仓库中的 Web 版本图标（150+ 个品牌）批量转换为 React Native 版本，保持 API 一致性和类型安全。

## 当前状态

### ✅ 已完成

- React Native 包基础架构 (`packages/react-native/`)
- 核心功能组件 (`RNIconAvatar`, `RNIconCombine`, `RNIconText`)
- 完整的类型系统：
  - `RNIconProps` - 基础图标属性
  - `RNIconAvatarProps` - 头像组件属性
  - `RNIconTextProps` - 文本组件属性
  - `RNIconCombineProps` - 组合组件属性
  - `CompoundedIcon` - 复合图标类型
- 两个标准模板：Adobe 和 AdobeFirefly

### 📋 待转换

- 150+ 个图标品牌从 `src/` 转换到 `packages/react-native/src/icons/`

## 转换方案

### 方案选择：基于模板的批量转换

**核心思路**：

1. 使用已实现的 Adobe/AdobeFirefly 作为标准模板
2. 扫描 `src/icons.ts` 获取所有图标品牌列表
3. 为每个品牌创建对应的 RN 版本目录和文件
4. 复制并适配 SVG 路径和样式配置

### 转换脚本架构

```
scripts/
├── convert-to-rn.ts          # 主转换脚本
├── templates/                # 模板文件
│   ├── icon-template/        # 单个图标的完整模板
│   └── index-template.ts     # index.ts 模板
└── utils/
    ├── svg-converter.ts      # SVG 路径转换工具
    ├── style-converter.ts    # 样式配置转换工具
    ├── component-detector.ts # 组件结构检测工具
    └── type-mapper.ts        # 类型映射工具
```

### 类型系统架构

```
packages/react-native/src/features/
├── types.ts                  # 核心类型定义
├── index.ts                  # 类型导出
├── IconAvatar/               # 头像组件实现
└── IconCombine/              # 组合组件实现
```

## 详细实现计划

### 1. 模板准备

#### 1.1 标准模板结构

```
templates/icon-template/
├── components/
│   ├── Mono.tsx             # 单色图标组件
│   ├── Color.tsx            # 彩色图标组件（可选）
│   ├── Text.tsx             # 文本组件
│   ├── Avatar.tsx           # 头像组件
│   └── Combine.tsx          # 组合组件
├── index.ts                 # 主导出文件
└── style.ts                 # 样式配置
```

#### 1.2 模板变量替换

- `{{ICON_NAME}}` - 图标品牌名称
- `{{ICON_NAME_CAMEL}}` - 驼峰命名
- `{{SVG_PATH}}` - SVG 路径数据
- `{{COLOR_PRIMARY}}` - 主色调
- `{{TITLE}}` - 显示标题
- `{{COMPONENT_TYPES}}` - 组件类型配置

### 2. 转换流程

#### 2.1 图标结构分析

```typescript
interface IconAnalysis {
  // 基础信息
  name: string; // 图标品牌名称
  title: string; // 显示标题
  description: string; // 描述信息 (从 markdown)
  group: 'model' | 'provider' | 'application'; // 分组 (从 markdown)

  // 组件存在性检测
  hasColor: boolean; // 是否有 Color 组件
  hasText: boolean; // 是否有 Text 组件
  hasAvatar: boolean; // 是否有 Avatar 组件
  hasCombine: boolean; // 是否有 Combine 组件
  hasBrand: boolean; // 是否有 Brand 组件
  hasBrandColor: boolean; // 是否有 BrandColor 组件
  hasTextCn: boolean; // 是否有 TextCn 组件
  hasTextColor: boolean; // 是否有 TextColor 组件

  // Combine 组件类型分析
  combineType: 'color-mono' | 'avatar' | 'avatar-mono';

  // SVG 信息
  svgPath: string; // SVG 路径数据
  viewBox: string; // viewBox 属性
  fillRule?: 'evenodd' | 'nonzero'; // 填充规则

  // 颜色信息
  colorPrimary: string; // 主色调
  colorGradient?: string; // 渐变色 (从 toc.ts)

  // 样式配置 (从 style.ts)
  combineTextMultiple: number; // 文本倍数
  combineSpaceMultiple: number; // 间距倍数
  avatarBackground: string; // 头像背景色
  avatarColor: string; // 头像文字色
  avatarIconMultiple: number; // 头像图标倍数

  // 渐变信息 (从 Color 组件分析) - 50%+ 图标使用，非常重要
  gradients?: {
    type: 'single' | 'multiple'; // 单渐变或多渐变
    count: number; // 渐变数量
    definitions: Array<{
      id: string; // 渐变 ID
      type: 'linearGradient' | 'radialGradient';
      coordinates: string; // 坐标字符串
      stops: Array<{
        offset: string; // 偏移量
        color: string; // 颜色
        opacity?: string; // 透明度
      }>;
    }>;
  };

  // 特殊效果 - 极少使用 (仅 Luma 等 1-2 个图标)
  specialEffects?: {
    mixBlendMode?: string; // 混合模式
    filters?: Array<{
      // 滤镜效果
      id: string;
      type: string;
      params: any;
    }>;
    clipPaths?: Array<{
      // 裁剪路径
      id: string;
      path: string;
    }>;
  };

  // 文档信息 - 所有图标都有，用于生成 toc.ts
  documentation: {
    docsUrl: string; // 文档 URL
    atomId: string; // 原子 ID
    nav: string; // 导航分类
  };
}
```

#### 2.2 组件类型映射

- **Mono/Color/Text**: 共享 `RNIconProps` 类型，通过组件名称区分功能
- **Avatar**: 使用统一的 `AvatarProps = Omit<RNIconAvatarProps, 'Icon'>` 类型
- **Combine**: 根据 Web 版本确定类型：
  - `color-mono` (142 个): 支持 `type: 'color' | 'mono'` 属性
  - `avatar` (8 个): 直接使用 Avatar 组件
  - `avatar-mono` (1 个): 支持 `type: 'avatar' | 'mono'` 属性

#### 2.3 SVG 转换规则

1. **颜色处理**: `currentColor` → `color` prop (默认黑色)
2. **尺寸处理**: 从 Web 组件中提取 viewBox，保持原始宽高比
   - 标准图标: `viewBox="0 0 24 24"` → RN 版本保持相同
   - 宽幅图标: `viewBox="0 0 156 24"` → RN 版本保持相同
   - 动态检测：解析 SVG 的 viewBox 属性，确保比例一致
3. **路径优化**: 保持原始 SVG 路径数据
4. **属性适配**: 移除 Web 特有属性，添加 RN 兼容属性
5. **渐变处理**: 将 Web 的 `useFillId` 转换为 RN 的静态渐变定义
6. **混合模式**: 检测并处理 `mixBlendMode` 等特殊效果

### 3. 脚本实现

#### 3.1 主转换脚本 (`convert-to-rn.ts`)

```typescript
class RNIconConverter {
  async convertAll(): Promise<void> {
    // 1. 扫描 Web 图标列表
    const webIcons = this.scanWebIcons();

    // 2. 分析每个图标结构
    const analyses = await this.analyzeIcons(webIcons);

    // 3. 批量转换
    await this.batchConvert(analyses);

    // 4. 更新导出文件
    this.updateExports(analyses);

    // 5. 生成 toc.ts
    this.generateToc(analyses);
  }

  private async analyzeIcons(webIcons: string[]): Promise<IconAnalysis[]> {
    return Promise.all(
      webIcons.map(async (iconName) => {
        const analysis: IconAnalysis = {
          // 基础信息
          name: iconName,
          title: await this.extractTitle(iconName),
          description: await this.extractDescription(iconName),
          group: await this.extractGroup(iconName),

          // 组件检测
          hasColor: await this.hasComponent(iconName, 'Color'),
          hasText: await this.hasComponent(iconName, 'Text'),
          hasAvatar: await this.hasComponent(iconName, 'Avatar'),
          hasCombine: await this.hasComponent(iconName, 'Combine'),
          hasBrand: await this.hasComponent(iconName, 'Brand'),
          hasBrandColor: await this.hasComponent(iconName, 'BrandColor'),
          hasTextCn: await this.hasComponent(iconName, 'TextCn'),
          hasTextColor: await this.hasComponent(iconName, 'TextColor'),

          // Combine 类型分析
          combineType: await this.analyzeCombineType(iconName),

          // SVG 信息
          svgPath: await this.extractSvgPath(iconName),
          viewBox: await this.extractViewBox(iconName),
          fillRule: await this.extractFillRule(iconName),

          // 颜色信息
          colorPrimary: await this.extractColorPrimary(iconName),
          colorGradient: await this.extractColorGradient(iconName),

          // 样式配置
          combineTextMultiple: await this.extractStyleValue(iconName, 'COMBINE_TEXT_MULTIPLE'),
          combineSpaceMultiple: await this.extractStyleValue(iconName, 'COMBINE_SPACE_MULTIPLE'),
          avatarBackground: await this.extractStyleValue(iconName, 'AVATAR_BACKGROUND'),
          avatarColor: await this.extractStyleValue(iconName, 'AVATAR_COLOR'),
          avatarIconMultiple: await this.extractStyleValue(iconName, 'AVATAR_ICON_MULTIPLE'),

          // 渐变信息
          gradients: await this.analyzeGradients(iconName),

          // 特殊效果
          hasMixBlendMode: await this.hasMixBlendMode(iconName),
          mixBlendModes: await this.extractMixBlendModes(iconName),

          // 文档信息
          docsUrl: this.generateDocsUrl(iconName),
          atomId: await this.extractAtomId(iconName),
        };

        return analysis;
      }),
    );
  }
}
```

#### 3.2 工具函数

- `svgConverter.ts`: SVG 路径提取和转换，包括 viewBox 解析
- `styleConverter.ts`: 样式配置迁移
- `componentDetector.ts`: 组件结构检测
- `typeMapper.ts`: 类型映射逻辑
- `viewBoxExtractor.ts`: 从 Web 组件中提取 viewBox 信息
- `markdownProcessor.ts`: 处理 markdown 文件和 frontmatter
- `tocGenerator.ts`: 为 RN 包生成 toc.ts 文件
- `gradientAnalyzer.ts`: 分析 Color 组件中的渐变信息
- `styleAnalyzer.ts`: 分析 style.ts 中的配置信息
- `metadataCollector.ts`: 综合收集所有元数据

#### 3.3 元数据收集示例

```typescript
// 以 Adobe 为例的完整元数据收集
const adobeAnalysis: IconAnalysis = {
  // 基础信息
  name: 'Adobe',
  title: 'Adobe',
  description: 'https://adobe.com',
  group: 'application',

  // 组件检测
  hasColor: true,
  hasText: true,
  hasAvatar: true,
  hasCombine: true,
  hasBrand: false,
  hasBrandColor: false,
  hasTextCn: false,
  hasTextColor: false,

  // Combine 类型
  combineType: 'color-mono',

  // SVG 信息
  svgPath: 'M14.86 3H23v19zM9.14 3H1v19zM11.992 9.998L17.182 22h-3.394l-1.549-3.813h-3.79z',
  viewBox: '0 0 24 24',
  fillRule: 'evenodd',

  // 颜色信息
  colorPrimary: '#EB1000',
  colorGradient: undefined,

  // 样式配置
  combineTextMultiple: 0.6,
  combineSpaceMultiple: 0.3,
  avatarBackground: '#EB1000',
  avatarColor: '#fff',
  avatarIconMultiple: 0.6,

  // 渐变信息 (Adobe 没有渐变)
  gradients: [],

  // 特殊效果
  hasMixBlendMode: false,
  mixBlendModes: [],

  // 文档信息
  docsUrl: 'adobe',
  atomId: 'Adobe',
};
```

### 4. 质量保证

#### 4.1 转换验证

- SVG 路径完整性检查
- 类型定义正确性验证
- 组件导出完整性检查
- 样式配置一致性验证

#### 4.2 测试策略

- 单元测试：每个组件的基本渲染
- 集成测试：复合图标的功能性
- 类型测试：TypeScript 类型检查
- 视觉测试：与 Web 版本的一致性

### 5. 构建和发布

#### 5.1 构建流程

```typescript
// packages/react-native/scripts/build.ts
class RNBuildScript {
  async build(): Promise<void> {
    // 1. 清理构建目录
    await this.clean();

    // 2. 类型检查
    await this.typeCheck();

    // 3. 构建包
    await this.buildPackage();

    // 4. 生成类型声明
    await this.generateTypes();
  }
}
```

#### 5.2 文档生成

- **Markdown 文档**: 复制或生成 `index.md` 文件
- **TOC 生成**: 为 RN 包生成 toc.ts 文件
- **README 更新**: 自动更新图标列表
- **API 文档**: 生成组件 API 文档
- **示例代码**: 生成使用示例

## 实施阶段

### 阶段一：基础设施 (1-2 天)

- [ ] 完善转换脚本框架
- [ ] 建立模板系统
- [ ] 实现核心工具函数

### 阶段二：批量转换 (3-5 天)

- [ ] 实现主转换脚本
- [ ] 批量转换所有图标
- [ ] 验证转换结果

### 阶段三：质量保证 (2-3 天)

- [ ] 实现测试套件
- [ ] 完善文档

### 阶段四：发布准备 (1-2 天)

- [ ] 构建和打包
- [ ] 发布到 npm
- [ ] 更新文档网站

## 风险评估

### 高风险

1. **SVG 兼容性**: 某些复杂 SVG 可能在 RN 中渲染异常
2. **性能影响**: 大量图标可能影响包大小和加载性能
3. **类型复杂性**: 复杂的类型映射可能导致类型错误

### 中风险

1. **转换准确性**: 自动转换可能遗漏某些细节
2. **维护成本**: 需要持续同步 Web 和 RN 版本

### 低风险

1. **构建流程**: 构建脚本相对简单，风险较低

## 成功标准

### 功能完整性

- [ ] 所有 150+ 图标成功转换
- [ ] 保持与 Web 版本 API 一致
- [ ] 完整的类型支持

### 质量指标

- [ ] 100% 类型检查通过
- [ ] 测试覆盖率 > 90%
- [ ] 构建成功率 > 95%

### 性能指标

- [ ] 包大小 < 2MB
- [ ] 加载时间 < 100ms
- [ ] 内存使用 < 50MB

## 后续优化

### 性能优化

- **代码分割**: 按需加载图标
- **缓存策略**: 实现图标缓存
- **压缩优化**: 进一步压缩包大小

### 功能增强

- **主题支持**: 支持深色 / 浅色主题
- **动画支持**: 添加图标动画
- **自定义样式**: 支持更多样式选项

### 开发体验

- **开发工具**: 提供图标预览工具
- **调试支持**: 添加调试信息
- **文档完善**: 提供详细的使用指南
