export interface ConversionResult {
  content?: string;
  detectedImports?: string[];
  error?: string;
  success: boolean;
}

export class FileConverter {
  /**
   * 转换重导出组件文件
   */
  convertReExportFile(webFileContent: string): ConversionResult {
    try {
      let content = webFileContent;

      // 转换重导出路径：@/ComponentName -> @/icons/ComponentName
      content = content.replaceAll(
        /export { default } from '@\/([^/]+)\/components\/([^']+)';/g,
        "export { default } from '@/icons/$1/components/$2';",
      );

      return { content, success: true };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'Unknown error',
        success: false,
      };
    }
  }

  /**
   * 转换SVG组件文件（Mono/Color/Text）
   */
  convertSvgComponentFile(
    webFileContent: string,
    componentType: 'Mono' | 'Color' | 'Text',
    iconName: string,
  ): ConversionResult {
    try {
      let content = webFileContent;

      // 基础转换
      content = this.removeUseClient(content);
      content = this.updateReactImports(content);
      content = this.removeWebSpecificImports(content);

      // 组件转换
      const hasCurrentColor = content.includes('fill="currentColor"');
      content = this.updateComponentSignature(content, hasCurrentColor);
      content = this.convertSvgContent(content, hasCurrentColor);

      // 转换后更新导入（基于转换后的内容）
      content = this.updateSvgImports(content);
      content = this.addSpecialImports(content);

      // 特殊处理：所有SVG组件都需要检查宽度比例
      content = this.adjustSvgComponentWidth(content);

      // 最终处理
      content = this.addDisplayName(content, iconName, componentType);

      return {
        content,
        detectedImports: this.detectSvgImports(webFileContent),
        success: true,
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'Unknown error',
        success: false,
      };
    }
  }

  /**
   * 转换非SVG组件文件（Avatar/Combine）
   */
  convertNonSvgComponentFile(
    webFileContent: string,
    componentType: 'Avatar' | 'Combine',
  ): ConversionResult {
    try {
      let content = webFileContent;

      content = this.removeUseClient(content);
      content = this.updateReactImports(content);

      if (componentType === 'Avatar') {
        content = this.convertAvatarComponent(content);
      } else if (componentType === 'Combine') {
        content = this.convertCombineComponent(content);
      }

      return { content, success: true };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'Unknown error',
        success: false,
      };
    }
  }

  // ========== 基础转换方法 ==========

  private removeUseClient(content: string): string {
    return content.replaceAll(/'use client';\s*\n/g, '');
  }

  private updateReactImports(content: string): string {
    return content.replaceAll(
      /import { memo } from 'react';\s*\n/g,
      "import React, { memo } from 'react';\n",
    );
  }

  private updateSvgImports(content: string): string {
    const svgImports = this.detectSvgImports(content);
    return content.replaceAll(
      /import type { IconType } from '@\/types';\s*\n/g,
      `import { ${svgImports.join(', ')} } from 'react-native-svg';\n\nimport type { RNIconProps } from '@/features';\n`,
    );
  }

  private removeWebSpecificImports(content: string): string {
    // 统一删除TITLE导入，后续在addSpecialImports中按需重新添加
    return content.replaceAll(/import { TITLE } from '\.\.\/style';\s*\n/g, '');
  }

  private addSpecialImports(content: string): string {
    let result = content;

    // 检查是否使用了useFillId或useFillIds
    const usesUseFillId = content.includes('useFillId(') || content.includes('useFillIds(');

    // 如果有useFillIds使用但没有导入，添加导入
    if (content.includes('useFillIds') && !content.includes('import { useFillIds }')) {
      result = result.replaceAll(
        /import type { RNIconProps } from '@\/features';\s*\n/g,
        "import type { RNIconProps } from '@/features';\nimport { useFillIds } from '@/hooks/useFillId';\n",
      );
    }

    // 如果有useFillId使用但没有导入，添加导入
    if (content.includes('useFillId(') && !content.includes('import { useFillId }')) {
      result = result.replaceAll(
        /import type { RNIconProps } from '@\/features';\s*\n/g,
        "import type { RNIconProps } from '@/features';\nimport { useFillId } from '@/hooks/useFillId';\n",
      );
    }

    // 如果使用了任何useFillId相关函数但没有TITLE导入，添加TITLE导入
    if (usesUseFillId && !content.includes('import { TITLE }')) {
      result = result.replaceAll(
        /import type { RNIconProps } from '@\/features';\s*\n/g,
        "import type { RNIconProps } from '@/features';\nimport { TITLE } from '../style';\n",
      );
    }

    return result;
  }

  private updateComponentSignature(content: string, hasCurrentColor: boolean): string {
    return content.replaceAll(/const Icon: IconType = memo\(\(([^)]+)\) => {/g, (match, params) => {
      // 替换size默认值
      let newParams = params.replaceAll("size = '1em'", 'size = 24');

      // 如果有currentColor，添加color参数
      if (hasCurrentColor && !newParams.includes('color')) {
        newParams = newParams.replace(
          /({ size = 24, style), (\.{3}rest })/,
          "$1, color = '#000000', $2",
        );
      }

      return `const Icon = memo<RNIconProps>((${newParams}) => {`;
    });
  }

  private addDisplayName(content: string, iconName: string, componentType: string): string {
    return content.replaceAll(
      /}\);\s*\nexport default Icon;/g,
      `});\n\nIcon.displayName = '${iconName}${componentType}';\n\nexport default Icon;`,
    );
  }

  // ========== SVG转换方法 ==========

  private convertSvgContent(content: string, hasCurrentColor: boolean): string {
    let result = content;

    // 转换标签
    result = this.convertSvgTags(result);

    // 转换属性
    result = this.convertSvgAttributes(result);

    // 格式化Svg和Path标签
    result = this.formatSvgTag(result, hasCurrentColor);
    result = this.formatPathTag(result, hasCurrentColor);

    return result;
  }

  private convertSvgTags(content: string): string {
    const tagMappings = [
      ['<svg', '<Svg'],
      ['</svg>', '</Svg>'],
      ['<path', '<Path'],
      ['<defs>', '<Defs>'],
      ['</defs>', '</Defs>'],
      ['<linearGradient', '<LinearGradient'],
      ['</linearGradient>', '</LinearGradient>'],
      ['<radialGradient', '<RadialGradient'],
      ['</radialGradient>', '</RadialGradient>'],
      ['<stop', '<Stop'],
      ['<circle', '<Circle'],
      ['<ellipse', '<Ellipse'],
      ['<g ', '<G '],
      ['<g>', '<G>'],
      ['</g>', '</G>'],
      ['<text', '<Text'],
      ['</text>', '</Text>'],
      ['<tspan', '<TSpan'],
      ['</tspan>', '</TSpan>'],
      ['<textPath', '<TextPath'],
      ['</textPath>', '</TextPath>'],
      ['<rect', '<Rect'],
      ['<line', '<Line'],
      ['<polygon', '<Polygon'],
      ['<polyline', '<Polyline'],
      ['<clipPath', '<ClipPath'],
      ['</clipPath>', '</ClipPath>'],
      ['<mask', '<Mask'],
      ['</mask>', '</Mask>'],
      ['<pattern', '<Pattern'],
      ['</pattern>', '</Pattern>'],
      ['<use', '<Use'],
      ['<image', '<Image'],
      ['<symbol', '<Symbol'],
      ['</symbol>', '</Symbol>'],
      // Filter effects
      ['<filter', '<Filter'],
      ['</filter>', '</Filter>'],
      ['<feFlood', '<FeFlood'],
      ['<feBlend', '<FeBlend'],
      ['<feColorMatrix', '<FeColorMatrix'],
      ['<feOffset', '<FeOffset'],
      ['<feGaussianBlur', '<FeGaussianBlur'],
      ['<feComposite', '<FeComposite'],
      ['<feMorphology', '<FeMorphology'],
      ['<feDropShadow', '<FeDropShadow'],
      ['<feTurbulence', '<FeTurbulence'],
      ['<feDisplacementMap', '<FeDisplacementMap'],
      ['<feConvolveMatrix', '<FeConvolveMatrix'],
      ['<feImage', '<FeImage'],
      ['<feMerge', '<FeMerge'],
      ['</feMerge>', '</FeMerge>'],
      ['<feMergeNode', '<FeMergeNode'],
    ];

    let result = content;
    tagMappings.forEach(([from, to]) => {
      result = result.replaceAll(new RegExp(from, 'g'), to);
    });

    return result;
  }

  private convertSvgAttributes(content: string): string {
    let result = content;

    // 删除title标签和Web特有属性
    result = result.replaceAll(/<title>.*?<\/title>\s*/g, '');
    result = result.replaceAll(
      "style={{ flex: 'none', lineHeight: 1, ...style }}",
      'style={style}',
    );
    result = result.replaceAll(/\s*xmlns="http:\/\/www\.w3\.org\/2000\/svg"/g, '');

    // 移除RN不支持的SVG属性
    result = result.replaceAll(/\s+shapeRendering="[^"]*"/g, '');
    result = result.replaceAll(/style={{\s*mixBlendMode:\s*'[^']*',?\s*}}/g, '');

    // 修复fontWeight在ViewStyle中的使用（移除fontWeight）
    result = result.replaceAll(
      /extraStyle={{ fontWeight: \d+, \.\.\.extraStyle }}/g,
      'extraStyle={{ ...extraStyle }}',
    );
    result = result.replaceAll(/fontSize: size \* [\d.]+,/g, '');

    return result;
  }

  private formatSvgTag(content: string, hasCurrentColor: boolean): string {
    return content.replaceAll(/<Svg\s+([^>]*?)>/g, (match, attrs) => {
      // 移除Web特有属性
      let cleanAttrs = attrs.replaceAll(/\s*fill="[^"]*"/g, '').replaceAll(/\s*xmlns="[^"]*"/g, '');

      // 构建属性数组
      const allAttrs = [];
      if (hasCurrentColor) allAttrs.push('color={color}');

      // 按顺序添加属性
      this.addAttributeIfExists(cleanAttrs, 'fillRule', allAttrs);
      this.addAttributeIfExists(cleanAttrs, 'height', allAttrs);
      this.addAttributeIfExists(cleanAttrs, 'style', allAttrs);
      this.addAttributeIfExists(cleanAttrs, 'viewBox', allAttrs);
      this.addAttributeIfExists(cleanAttrs, 'width', allAttrs);

      // 格式化为多行
      const formattedAttrs = allAttrs.map((attr) => `      ${attr}`).join('\n');
      return `<Svg\n${formattedAttrs}\n      {...rest}\n    >`;
    });
  }

  private formatPathTag(content: string, hasCurrentColor: boolean): string {
    return content.replaceAll(/<Path\s+([^>]*?)\s*\/?>/g, (match, originalAttrs) => {
      // 处理fill属性
      let attrs = originalAttrs.replaceAll('fill="currentColor"', 'fill={color}');

      if (!attrs.includes('fill=') && hasCurrentColor) {
        attrs = `fill={color} ${attrs.trim()}`;
      } else if (attrs.includes('fill=')) {
        // 调整属性顺序：fill 在前，d 在后
        const fillMatch = attrs.match(/(fill={[^}]+}|fill="[^"]*")/);
        const dMatch = attrs.match(/(d="[^"]*")/);
        if (fillMatch && dMatch) {
          const otherAttrs = attrs.replace(fillMatch[0], '').replace(dMatch[0], '').trim();
          attrs = `${fillMatch[0]} ${dMatch[0]} ${otherAttrs}`.trim();
        }
      }

      return `<Path\n        ${attrs.trim()}\n      />`;
    });
  }

  private addAttributeIfExists(attrs: string, attrName: string, targetArray: string[]): void {
    const patterns = {
      fillRule: /fillRule="[^"]*"/,
      height: /height={[^}]+}/,
      style: /style={[^}]+}/,
      viewBox: /viewBox="[^"]*"/,
      width: /width={[^}]+}/,
    };

    const match = attrs.match(patterns[attrName as keyof typeof patterns]);
    if (match) targetArray.push(match[0]);
  }

  // ========== 特殊处理方法 ==========

  private adjustSvgComponentWidth(content: string): string {
    const viewBoxMatch = content.match(/viewBox="([^"]+)"/);
    if (!viewBoxMatch) return content;

    const viewBoxValues = viewBoxMatch[1].split(' ');
    if (viewBoxValues.length !== 4) return content;

    const width = parseFloat(viewBoxValues[2]);
    const height = parseFloat(viewBoxValues[3]);
    const ratio = width / height;

    if (ratio === 1) return content;

    return content.replaceAll(
      /(<Svg[^>]*?)(\s+viewBox="[^"]*")/g,
      `$1 width={size * ${ratio.toFixed(2)}} // 保持宽高比$2`,
    );
  }

  private convertAvatarComponent(content: string): string {
    let result = content;

    // 更新导入
    result = result.replaceAll(
      /import IconAvatar, { type IconAvatarProps } from '@\/features\/IconAvatar';\s*\n/g,
      "import { RNIconAvatar, type RNIconAvatarProps } from '@/features';\n",
    );

    // 更新类型定义
    result = result.replaceAll(
      "export interface AvatarProps extends Omit<IconAvatarProps, 'Icon'>",
      "export interface AvatarProps extends Omit<RNIconAvatarProps, 'Icon'>",
    );

    // 转换组件标签
    result = result.replaceAll('<IconAvatar', '<RNIconAvatar');

    // 处理background属性 - 更灵活的匹配
    if (result.includes('background={AVATAR_BACKGROUND}')) {
      result = result.replaceAll(
        'background={AVATAR_BACKGROUND}',
        'background={background || AVATAR_BACKGROUND}',
      );

      // 检查函数参数中是否已经有background参数
      const functionSignatureMatch = result.match(
        /const Avatar = memo<AvatarProps>\((\([^)]*\)) => {/,
      );
      if (functionSignatureMatch) {
        const params = functionSignatureMatch[1];

        // 如果参数中没有background，需要添加
        if (!params.includes('background')) {
          const newParams = params.replace('...rest', 'background, ...rest');
          result = result.replace(
            /const Avatar = memo<AvatarProps>\(\([^)]*\) => {/,
            `const Avatar = memo<AvatarProps>(${newParams} => {`,
          );
        }
      }
    }

    // 修复组件结束语法 - 更精确的匹配
    result = result.replaceAll(/(\s+\/>\s*\n\s*\);\s*\n}\);\s*\n)/g, '\n    />\n  )\n});\n');

    return result;
  }

  private convertCombineComponent(content: string): string {
    return (
      content
        .replaceAll(
          /import IconCombine, { type IconCombineProps } from '@\/features\/IconCombine';\s*\n/g,
          "import { RNIconCombine, type RNIconCombineProps } from '@/features';\n",
        )
        .replaceAll(
          "export interface CombineProps extends Omit<IconCombineProps, 'Icon' | 'Text'>",
          "export interface CombineProps extends Omit<RNIconCombineProps, 'Icon' | 'Text'>",
        )
        .replaceAll('<IconCombine', '<RNIconCombine')
        .replaceAll(
          /extraStyle={{ fontWeight: \d+, \.\.\.extraStyle }}/g,
          'extraStyle={{ ...extraStyle }}',
        )
        // 修复跨图标组件导入路径
        .replaceAll(
          /import (.+) from '@\/([^/]+)\/components\/([^']+)';\s*\n/g,
          "import $1 from '@/icons/$2/components/$3';\n",
        )
        // 移除fontSize属性（包括复杂表达式）
        .replaceAll(/fontSize: size \* [\d.]+,\s*/g, '')
    );
  }

  // ========== 工具方法 ==========

  private detectSvgImports(content: string): string[] {
    const svgElements = [
      'Svg',
      'Path',
      'Defs',
      'LinearGradient',
      'RadialGradient',
      'Stop',
      'Circle',
      'Ellipse',
      'G',
      'Text',
      'TSpan',
      'TextPath',
      'Rect',
      'Line',
      'Polygon',
      'Polyline',
      'ClipPath',
      'Mask',
      'Pattern',
      'Use',
      'Image',
      'Symbol',
      // Filter effects
      'Filter',
      'FeFlood',
      'FeBlend',
      'FeColorMatrix',
      'FeOffset',
      'FeGaussianBlur',
      'FeComposite',
      'FeMorphology',
      'FeDropShadow',
      'FeTurbulence',
      'FeDisplacementMap',
      'FeConvolveMatrix',
      'FeImage',
      'FeMerge',
      'FeMergeNode',
    ];

    const detectedImports = new Set<string>();

    svgElements.forEach((element) => {
      const lowerElement = element.toLowerCase();
      // 使用更精确的匹配，确保元素名后面跟着空格、>或属性
      const regex = new RegExp(`<${lowerElement}(\\s|>|$)`, 'i');
      if (regex.test(content)) {
        detectedImports.add(element);
      }
    });

    return Array.from(detectedImports).sort();
  }
}
