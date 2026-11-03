import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

import { renderToString } from '@vue/server-renderer';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { type Component, createApp, createSSRApp, h, nextTick, ref } from 'vue';
import { compileScript, compileTemplate, parse } from 'vue/compiler-sfc';

import * as icons from '../dist/icons.js';
import {
  AgentIcon,
  DeepSeek,
  getLobeIconCDN,
  ModelIcon,
  ModelProvider,
  ModelTag,
  OpenAI,
  ProviderCombine,
  ProviderIcon,
  Sora,
  toc,
} from '../dist/index.js';

const { join, resolve } = path;
const packageDir = process.cwd();
const root = resolve(packageDir, '../..');
const render = (component: Component, props = {}) =>
  renderToString(createSSRApp(() => h(component, props)));
const apps: ReturnType<typeof createApp>[] = [];
afterEach(() => {
  apps.splice(0).forEach((app) => app.unmount());
  document.body.innerHTML = '';
  vi.restoreAllMocks();
});

describe('shared catalog', () => {
  it('exports every React icon family and the same catalog', () => {
    const brands = [
      ...readFileSync(join(root, 'src/icons.ts'), 'utf8').matchAll(/default as (\w+),/g),
    ].map((match) => match[1]);
    expect(Object.keys(icons).sort()).toEqual(brands.sort());
    expect(toc).toEqual(JSON.parse(readFileSync(join(root, 'src/toc.json'), 'utf8')));
  });

  it('renders every family and every attached component variant', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const variants = [
      'Avatar',
      'Brand',
      'BrandColor',
      'BrandMono',
      'Color',
      'Combine',
      'Morden',
      'Simple',
      'Text',
      'TextCn',
      'TextColor',
    ];
    for (const [name, icon] of Object.entries(icons)) {
      const family = icon as unknown as Record<string, Component>;
      const components = [
        ['Mono', icon],
        ...variants
          .filter((variant) => family[variant])
          .map((variant) => [variant, family[variant]]),
      ] as [string, Component][];
      for (const [variant, component] of components) {
        const html = await render(component, { size: 32 });
        expect(html, `${name}.${variant}`).toContain(variant === 'Avatar' ? '<div' : '<svg');
        expect(html, `${name}.${variant}`).not.toContain('[object Object]');
        expect(html, `${name}.${variant}`).not.toMatch(
          /fillRule=|clipRule=|stopColor=|strokeWidth=/,
        );
        const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
        expect(new Set(ids).size, `${name}.${variant} duplicate IDs`).toBe(ids.length);
        for (const reference of html.matchAll(/url\(#([^)]+)\)/g)) {
          expect(ids, `${name}.${variant} missing ${reference[1]}`).toContain(reference[1]);
        }
      }
    }
    expect(warn.mock.calls).toEqual([]);
  }, 30000);

  it('emits a framework-independent ESM graph and supports subpath imports', async () => {
    const modules: string[] = [];
    const collect = (directory: string) => {
      for (const entry of readdirSync(directory, { withFileTypes: true })) {
        const path = join(directory, entry.name);
        if (entry.isDirectory()) collect(path);
        else if (/\.(?:js|d\.ts)$/.test(entry.name)) modules.push(path);
      }
    };
    collect(join(packageDir, 'dist'));
    for (const module of modules) {
      expect(readFileSync(module, 'utf8'), module).not.toMatch(
        /(?:from\s*|import\s*)["'](?:react(?:\/[^"']*)?|react-dom|@lobehub\/(?:ui|icons))["']/,
      );
    }
    const { default: direct } = await import('@lobehub/icons-vue/OpenAI');
    expect(direct).toBe(OpenAI);
    const { default: color } = await import('@lobehub/icons-vue/es/DeepSeek/components/Color');
    expect(color).toBe(DeepSeek.Color);
  });
});

describe('Vue behavior', () => {
  it('compiles script-setup templates with compound component names', () => {
    const { descriptor, errors } = parse(`<script setup lang="ts">
      import { DeepSeek, OpenAI } from '@lobehub/icons-vue';
      </script><template><DeepSeek.Color :size="32" /><OpenAI.Avatar :size="40" type="gpt5" /></template>`);
    expect(errors).toEqual([]);
    const script = compileScript(descriptor, { id: 'icons-example' });
    const template = compileTemplate({
      id: 'icons-example',
      source: descriptor.template!.content,
      filename: 'Example.vue',
      compilerOptions: { bindingMetadata: script.bindings },
    });
    expect(template.errors).toEqual([]);
    expect(template.code).toContain('$setup["DeepSeek"].Color');
    expect(template.code).toContain('$setup["OpenAI"].Avatar');
  });

  it('updates size, color, class, styles, attributes, and events', async () => {
    const size = ref(24);
    const color = ref('red');
    const click = vi.fn();
    const app = createApp(() =>
      h(OpenAI, {
        'size': size.value,
        'color': color.value,
        'class': ['logo', { active: true }],
        'style': ['margin-left: 4px', { opacity: 0.5 }],
        'aria-label': 'OpenAI',
        'data-testid': 'icon',
        'onClick': click,
      }),
    );
    const container = document.createElement('div');
    document.body.append(container);
    apps.push(app);
    app.mount(container);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('width')).toBe('24');
    expect(svg.getAttribute('class')).toBe('logo active');
    expect(svg.style.marginLeft).toBe('4px');
    expect(svg.style.opacity).toBe('0.5');
    expect(svg.getAttribute('aria-label')).toBe('OpenAI');
    expect(svg.getAttribute('data-testid')).toBe('icon');
    svg.dispatchEvent(new MouseEvent('click'));
    expect(click).toHaveBeenCalledOnce();
    size.value = 48;
    color.value = 'blue';
    await nextTick();
    expect(svg.getAttribute('width')).toBe('48');
    expect(svg.getAttribute('color')).toBe('blue');
  });

  it('preserves boolean props, kebab-case props, avatar props, and reactive variants', async () => {
    const html = await render(DeepSeek.Combine, { 'show-text': false, 'inverse': '', 'size': 40 });
    expect(html.match(/<svg/g)).toHaveLength(1);
    expect(html).toContain('margin-left:');
    const type = ref<'gpt3' | 'gpt5'>('gpt3');
    const app = createApp(() => h(OpenAI.Avatar, { type: type.value, size: 40, shape: 'square' }));
    const container = document.createElement('div');
    apps.push(app);
    app.mount(container);
    const original = container.innerHTML;
    expect(container.firstElementChild?.getAttribute('style')).toContain('border-radius: 4px');
    type.value = 'gpt5';
    await nextTick();
    expect(container.innerHTML).not.toBe(original);
  });

  it('keeps gradient IDs unique and stable through SSR hydration and updates', async () => {
    const size = ref(24);
    const view = () =>
      h('div', [h(Sora.Color, { size: size.value }), h(Sora.Color, { size: size.value })]);
    const html = await renderToString(createSSRApp(view));
    const container = document.createElement('div');
    container.innerHTML = html;
    document.body.append(container);
    const ids = [...container.querySelectorAll('[id]')].map((element) => element.id);
    expect(ids.length).toBeGreaterThan(1);
    expect(new Set(ids).size).toBe(ids.length);
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const app = createSSRApp(view);
    apps.push(app);
    app.mount(container);
    size.value = 48;
    await nextTick();
    expect([...container.querySelectorAll('[id]')].map((element) => element.id)).toEqual(ids);
    expect(container.querySelector('svg')?.getAttribute('width')).toBe('48');
    expect(warn.mock.calls).toEqual([]);
    expect(error.mock.calls).toEqual([]);
    expect(await renderToString(createSSRApp(view))).toContain(ids[0]);
  });
});

describe('mapping helpers', () => {
  it('resolves models, providers, agents, provider combinations, and model tags', async () => {
    expect(await render(ModelIcon, { model: 'gpt-5', type: 'mono' })).toContain(
      '<title>OpenAI</title>',
    );
    expect(
      await render(ProviderIcon, { provider: ModelProvider.DeepSeek, type: 'color' }),
    ).toContain('<title>DeepSeek</title>');
    expect(await render(AgentIcon, { agent: 'claude-code', type: 'mono' })).toContain('<svg');
    expect(await render(ProviderCombine, { provider: ModelProvider.Wenxin })).toContain('<svg');
    expect(await render(ModelTag, { model: 'gpt-5' })).toContain('gpt-5</span>');
    for (const component of [ModelIcon, ProviderIcon, AgentIcon, ProviderCombine]) {
      expect(
        await render(component, {
          model: 'unknown',
          provider: 'unknown',
          agent: 'unknown',
          size: 24,
        }),
      ).toContain('<svg');
    }
    expect(getLobeIconCDN('OpenAI', { cdn: 'unpkg', format: 'svg', type: 'mono' })).toBe(
      'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/openai.svg',
    );
  });
});
