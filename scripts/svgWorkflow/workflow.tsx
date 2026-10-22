import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { consola } from 'consola';
import pMap from 'p-map';
import puppeteer, { type Browser } from 'puppeteer';
import type { ComponentType } from 'react';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const rootDir = resolve(__dirname, '../..');
export const srcDir = resolve(rootDir, 'src');

export interface OutputDirs {
  avatar: string;
  png: string;
  svg: string;
  webp: string;
}

/** Output locations of `build:static` (the published static packages). */
export const defaultOutputDirs: OutputDirs = {
  avatar: resolve(rootDir, 'packages/static-avatar/avatars'),
  png: resolve(rootDir, 'packages/static-png'),
  svg: resolve(rootDir, 'packages/static-svg/icons'),
  webp: resolve(rootDir, 'packages/static-webp'),
};

export type CompoundIcon = ComponentType & {
  Avatar?: ComponentType;
  Brand?: ComponentType;
  BrandColor?: ComponentType;
  Color?: ComponentType;
  Combine?: ComponentType;
  Text?: ComponentType;
  TextCn?: ComponentType;
  TextColor?: ComponentType;
};

export const getIconIds = () => {
  const source = readFileSync(resolve(srcDir, 'icons.ts'), 'utf8');
  return Array.from(source.matchAll(/default as (\w+)/g), (match) => match[1]);
};

/**
 * Import the compound icons registered in `src/icons.ts`.
 * @param only Optional list of icon ids (case-insensitive) to load instead of every icon.
 */
export const loadIcons = async (only?: string[]): Promise<Record<string, CompoundIcon>> => {
  // Preload feature modules to avoid circular initialization:
  // any icon -> @/features/IconAvatar -> @lobehub/ui -> @lobehub/icons (src/index.ts)
  // -> src/features -> modelConfig -> back into the icon being loaded.
  await import(pathToFileURL(resolve(srcDir, 'features/IconAvatar/index.tsx')).href);
  await import(pathToFileURL(resolve(srcDir, 'features/IconCombine/index.tsx')).href);

  const filter = only && new Set(only.map((id) => id.toLowerCase()));
  const iconIds = getIconIds().filter((id) => !filter || filter.has(id.toLowerCase()));
  const entries = await Promise.all(
    iconIds.map(async (id) => {
      const iconPath = resolve(srcDir, id, 'index.ts');
      const mod = (await import(pathToFileURL(iconPath).href)) as { default: CompoundIcon };
      return [id, mod.default] as const;
    }),
  );
  return Object.fromEntries(entries);
};

/** File-name suffixes written by `runSvg` (keep in sync with it). */
export const VARIANT_SUFFIXES = [
  '',
  '-color',
  '-text',
  '-text-color',
  '-text-cn',
  '-brand',
  '-brand-color',
];

export type ThemeMode = 'light' | 'dark';

export const themeColors = {
  // 浅色主题使用黑色
  dark: '#FFFFFF',
  light: '#000000', // 深色主题使用白色
};

export interface SvgWorkflowOptions {
  /** Only export these icon ids (case-insensitive). Exports every icon when omitted. */
  only?: string[];
  /** Override output directories, e.g. to render into a scratch folder. */
  outputDirs?: Partial<OutputDirs>;
}

export class SvgWorkflow {
  ignoreList: string[] = [];
  browserInstance: Browser | null = null;
  browserPromise: Promise<Browser> | null = null;
  icons: Record<string, CompoundIcon> = {};
  only?: string[];
  outputDirs: OutputDirs;
  /** SVG file names written by `runSvg`, used to scope PNG / WebP conversion in filtered runs. */
  exportedSvgs: string[] = [];

  constructor(options: SvgWorkflowOptions = {}) {
    this.only = options.only;
    this.outputDirs = { ...defaultOutputDirs, ...options.outputDirs };
  }

  async getBrowser(): Promise<Browser> {
    // 使用 Promise 避免并发时启动多个浏览器实例
    if (!this.browserPromise) {
      this.browserPromise = puppeteer.launch({
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          // 允许 file:// 下加载字体等资源
          '--allow-file-access-from-files',
        ],
        headless: true,
      });
      this.browserInstance = await this.browserPromise;
    }
    return this.browserInstance!;
  }

  async closeBrowser(): Promise<void> {
    if (this.browserInstance) {
      await this.browserInstance.close();
      this.browserInstance = null;
      this.browserPromise = null;
    }
  }

  async exportSvgAvatar(Component: ComponentType, outputFileName: string): Promise<void> {
    const size = 640;
    const outputAvatarsDir = this.outputDirs.avatar;

    // 确保输出目录存在
    if (!existsSync(outputAvatarsDir)) {
      mkdirSync(outputAvatarsDir, { recursive: true });
    }

    const node = createElement(Component, {
      // @ts-ignore
      shape: 'square',
      size,
      style: {
        alignItems: 'center',
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'center',
      },
    });

    // 使用 renderToStaticMarkup 生成静态 HTML
    // 注意：如果组件使用了 hooks（如 useThemeMode），这里可能会报错
    // 但由于 Puppeteer 在浏览器中运行，静态 HTML 通常已足够
    let htmlString: string;
    try {
      htmlString = renderToStaticMarkup(node);
    } catch {
      // 如果因为 hooks 报错，尝试使用 renderToString（虽然也会报错，但至少能捕获）
      // 实际上，由于 IconAvatar 使用了 useThemeMode，我们需要在浏览器中渲染
      // 这里我们抛出一个更友好的错误信息
      throw new Error(
        `Failed to render ${outputFileName}: Component uses hooks that cannot be rendered on server side. Consider using a server-safe version or rendering in browser.`,
      );
    }

    // 构造完整 HTML，内联所有样式
    const fullHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: ${size}px;
      height: ${size}px;
      overflow: hidden;
      /* 透明背景，如果组件自身有背景色会保留 */
      background: transparent;
    }
  </style>
</head>
<body>${htmlString}</body>
</html>`;

    const browser = await this.getBrowser();
    const page = await browser.newPage();

    try {
      await page.setViewport({
        deviceScaleFactor: 2,
        height: size,
        width: size, // 2x 高清，最终输出 1280x1280 再压缩
      });

      // 对于静态 HTML，使用 'load' 或 'domcontentloaded' 更快
      await page.setContent(fullHtml, {
        waitUntil: 'load',
      });

      // 等待样式和布局正确应用（使用 waitForFunction 替代已废弃的 waitForTimeout）
      await page.waitForFunction(
        () => {
          const body = document.body;
          return body.offsetWidth > 0 && body.offsetHeight > 0;
        },
        { timeout: 1000 },
      );

      const filename = resolve(outputAvatarsDir, `${outputFileName}.webp`);

      await page.screenshot({
        clip: { height: size, width: size, x: 0, y: 0 },
        omitBackground: true,
        path: filename,
        quality: 95,
        type: 'webp', // 保留透明通道
      });

      consola.success(`Exported avatar to ${filename}`);
    } finally {
      await page.close();
    }
  }

  exportSvg(Component: ComponentType, outputFileName: string): void {
    const svgString = renderToStaticMarkup(createElement(Component));
    // Outermost <svg>…</svg> of the markup (the component may wrap it).
    const start = svgString.search(/<svg[^>]*>/i);
    const end = svgString.toLowerCase().lastIndexOf('</svg>');
    const svgContent = start !== -1 && end > start ? svgString.slice(start, end + 6) : undefined;

    if (!svgContent) {
      throw new Error('No SVG content found in the rendered component');
    }

    const filename = resolve(this.outputDirs.svg, outputFileName + '.svg');
    writeFileSync(filename, svgContent, 'utf8');
    this.exportedSvgs.push(outputFileName + '.svg');
    consola.success(`Exported SVG to ${filename}`);
  }

  async convertSvgToPng(
    svgPath: string,
    outputPath: string,
    height: number,
    themeMode?: ThemeMode,
  ): Promise<void> {
    try {
      let svgContent = readFileSync(svgPath, 'utf8');
      if (themeMode) {
        const color = themeColors[themeMode];
        svgContent = svgContent.replaceAll('currentColor', color);
      }
      await sharp(Buffer.from(svgContent))
        .resize({ height })
        .png({ compressionLevel: 9, palette: true, quality: 95 })
        .toFile(outputPath);
      consola.success(`PNG file has been saved to ${outputPath}`);
    } catch (error) {
      consola.error('Error converting SVG to PNG:', error);
    }
  }

  async convertSvgToWebp(
    svgPath: string,
    outputPath: string,
    height: number,
    themeMode?: ThemeMode,
  ): Promise<void> {
    try {
      let svgContent = readFileSync(svgPath, 'utf8');
      if (themeMode) {
        const color = themeColors[themeMode];
        svgContent = svgContent.replaceAll('currentColor', color);
      }
      await sharp(Buffer.from(svgContent))
        .resize({ height })
        .webp({ quality: 95 })
        .toFile(outputPath);
      consola.success(`WebP file has been saved to ${outputPath}`);
    } catch (error) {
      consola.error('Error converting SVG to WebP:', error);
    }
  }

  /** SVG files to rasterize: every SVG in the output folder, or only this run's exports when filtered. */
  getSvgFiles(): string[] {
    return this.only ? [...this.exportedSvgs] : readdirSync(this.outputDirs.svg);
  }

  ensureOutputDirs(): void {
    const { avatar, png, svg, webp } = this.outputDirs;
    for (const dir of [
      svg,
      avatar,
      resolve(png, 'light'),
      resolve(png, 'dark'),
      resolve(webp, 'light'),
      resolve(webp, 'dark'),
    ]) {
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    }
  }

  /**
   * Delete every file the exporter writes for these (lower-cased) icon ids, so removed icons and
   * dropped variants do not linger in packages/static-*.
   */
  removeIconFiles(ids: string[]): string[] {
    const { avatar, png, svg, webp } = this.outputDirs;
    const removed: string[] = [];
    for (const id of ids) {
      const files = [
        ...VARIANT_SUFFIXES.flatMap((suffix) => [
          resolve(svg, `${id}${suffix}.svg`),
          ...(['light', 'dark'] as const).flatMap((theme) => [
            resolve(png, theme, `${id}${suffix}.png`),
            resolve(webp, theme, `${id}${suffix}.webp`),
          ]),
        ]),
        resolve(avatar, `${id}.webp`),
      ];
      for (const file of files) {
        if (existsSync(file)) {
          rmSync(file);
          removed.push(file);
        }
      }
    }
    return removed;
  }

  async runSvg() {
    await pMap(Object.entries(this.icons), async ([key, Icon]: [string, any]) => {
      if (!this.ignoreList.includes(key.toLowerCase())) {
        try {
          this.exportSvg(Icon, `${key.toLowerCase()}`);
          if (Icon?.Color) {
            this.exportSvg(Icon.Color, `${key.toLowerCase()}-color`);
          }
          if (Icon?.Text) {
            this.exportSvg(Icon.Text, `${key.toLowerCase()}-text`);
          }
          if (Icon?.TextColor) {
            this.exportSvg(Icon.TextColor, `${key.toLowerCase()}-text-color`);
          }
          if (Icon?.TextCn) {
            this.exportSvg(Icon.TextCn, `${key.toLowerCase()}-text-cn`);
          }
          if (Icon?.Brand) {
            this.exportSvg(Icon.Brand, `${key.toLowerCase()}-brand`);
          }
          if (Icon?.BrandColor) {
            this.exportSvg(Icon.BrandColor, `${key.toLowerCase()}-brand-color`);
          }
        } catch (error) {
          consola.error(`Failed to export ${key.toLowerCase()}:`, error);
        }
      }
    });
  }

  async runAvatar() {
    try {
      // 先启动浏览器，避免并发时启动多个实例
      await this.getBrowser();
      consola.info('Browser launched, starting avatar export...');

      await pMap(
        Object.entries(this.icons),
        async ([key, Icon]: [string, any]) => {
          if (!this.ignoreList.includes(key.toLowerCase())) {
            try {
              if (Icon?.Avatar) {
                await this.exportSvgAvatar(Icon.Avatar, `${key.toLowerCase()}`);
              }
            } catch (error) {
              consola.error(`Failed to export ${key.toLowerCase()}:`, error);
            }
          }
        },
        { concurrency: 5 }, // 限制并发数，避免同时打开太多页面
      );
    } finally {
      await this.closeBrowser();
    }
  }

  async runPng() {
    const { png, svg } = this.outputDirs;
    await pMap(
      this.getSvgFiles(),
      async (file) => {
        if (file.endsWith('.svg') && !this.ignoreList.includes(file)) {
          const svgPath = resolve(svg, file);
          const pngLightPath = resolve(png, 'light', file.replace('.svg', '.png'));
          const pngDarkPath = resolve(png, 'dark', file.replace('.svg', '.png'));
          await this.convertSvgToPng(svgPath, pngLightPath, 640, 'light');
          await this.convertSvgToPng(svgPath, pngDarkPath, 640, 'dark');
        }
      },
      { concurrency: 5 },
    );
  }

  async runWebp() {
    const { svg, webp } = this.outputDirs;
    await pMap(
      this.getSvgFiles(),
      async (file) => {
        if (file.endsWith('.svg') && !this.ignoreList.includes(file)) {
          const svgPath = resolve(svg, file);
          const webpLightPath = resolve(webp, 'light', file.replace('.svg', '.webp'));
          const webpDarkPath = resolve(webp, 'dark', file.replace('.svg', '.webp'));
          await this.convertSvgToWebp(svgPath, webpLightPath, 640, 'light');
          await this.convertSvgToWebp(svgPath, webpDarkPath, 640, 'dark');
        }
      },
      { concurrency: 5 },
    );
  }

  async loadIcons() {
    this.icons = await loadIcons(this.only);
    if (this.only) {
      const loaded = new Set(Object.keys(this.icons).map((id) => id.toLowerCase()));
      const missing = this.only.filter((id) => !loaded.has(id.toLowerCase()));
      if (missing.length > 0) consola.warn(`Not registered in src/icons.ts: ${missing.join(', ')}`);
    }
  }

  async run() {
    await this.loadIcons();
    this.ensureOutputDirs();
    await this.runSvg();
    await this.runPng();
    await this.runWebp();
    await this.runAvatar();
  }
}
