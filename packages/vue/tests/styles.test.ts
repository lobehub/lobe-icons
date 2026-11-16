import { renderToString } from '@vue/server-renderer';
import { afterEach, describe, expect, it } from 'vitest';
import { type Component, createApp, createSSRApp, h } from 'vue';

import { Bing, ModelProvider, OpenAI, ProviderCombine } from '../dist/index.js';
import { normalizeReactStyleValue } from '../src/reactStyle';

const apps: ReturnType<typeof createApp>[] = [];
afterEach(() => {
  apps.splice(0).forEach((app) => app.unmount());
  document.body.innerHTML = '';
});

const render = async (mode: 'SSR' | 'DOM', component: Component, props: object) => {
  const container = document.createElement('div');
  document.body.append(container);
  if (mode === 'SSR') {
    container.innerHTML = await renderToString(createSSRApp(() => h(component, props)));
  } else {
    const app = createApp(() => h(component, props));
    apps.push(app);
    app.mount(container);
  }
  return container;
};

describe('shared React style values', () => {
  it('adds pixels to lengths while preserving unitless properties and existing CSS values', () => {
    expect(normalizeReactStyleValue('fontSize', 12)).toBe('12px');
    expect(normalizeReactStyleValue('marginLeft', -2)).toBe('-2px');
    expect(normalizeReactStyleValue('height', 0)).toBe(0);
    expect(normalizeReactStyleValue('--offset', 3)).toBe(3);
    expect(normalizeReactStyleValue('marginLeft', '0.5em')).toBe('0.5em');
    expect(normalizeReactStyleValue('marginLeft', undefined)).toBeUndefined();
    for (const property of [
      'fontWeight',
      'lineHeight',
      'opacity',
      'flexGrow',
      'gridColumn',
      'strokeWidth',
      'WebkitLineClamp',
      'msFlex',
    ]) {
      expect(normalizeReactStyleValue(property, 2), property).toBe(2);
    }
  });

  it.each(['SSR', 'DOM'] as const)(
    'preserves Ollama Cloud font size and spacing in %s',
    async (mode) => {
      const container = await render(mode, ProviderCombine, {
        provider: ModelProvider.OllamaCloud,
        size: 100,
      });
      const extra = container.querySelector('span')!;
      expect(extra.textContent).toBe('Cloud');
      expect(extra.style.fontSize).toBe('78px');
      expect(extra.style.marginLeft).toBe('20px');
      expect(extra.style.fontWeight).toBe('500');
      expect(extra.style.lineHeight).toBe('1');
    },
  );

  it.each(['SSR', 'DOM'] as const)('preserves Bing avatar offsets in %s', async (mode) => {
    const container = await render(mode, Bing.Avatar, { size: 50 });
    expect(container.querySelector('svg')!.style.marginLeft).toBe('4px');
  });

  it.each(['SSR', 'DOM'] as const)('preserves provider divider spacing in %s', async (mode) => {
    const container = await render(mode, ProviderCombine, {
      provider: ModelProvider.Wenxin,
      size: 24,
    });
    const divider = container.querySelector<HTMLElement>('span[aria-hidden="true"]')!;
    expect(divider.style.marginInline).toBe('4px');
  });

  it('keeps consumer numeric styles in native Vue form when merging source styles', async () => {
    const html = await renderToString(
      createSSRApp(() =>
        h(OpenAI, { style: { 'fontSize': 17, 'opacity': 0.5, 'strokeWidth': 2, '--offset': 3 } }),
      ),
    );
    expect(html).toContain('font-size:17;');
    expect(html).not.toContain('font-size:17px');
    expect(html).toContain('opacity:0.5;');
    expect(html).toContain('stroke-width:2;');
    expect(html).toContain('--offset:3;');
  });

  it.each(['SSR', 'DOM'] as const)('keeps consumer CSS strings and arrays in %s', async (mode) => {
    const container = await render(mode, OpenAI, {
      style: ['margin-left: 2em', { fontSize: '17px', opacity: 0.5 }],
    });
    const svg = container.querySelector('svg')!;
    expect(svg.style.marginLeft).toBe('2em');
    expect(svg.style.fontSize).toBe('17px');
    expect(svg.style.opacity).toBe('0.5');
  });
});
