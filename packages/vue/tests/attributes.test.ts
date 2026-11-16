import { renderToString } from '@vue/server-renderer';
import { afterEach, describe, expect, it } from 'vitest';
import { type Component, createApp, createSSRApp, h, nextTick, ref } from 'vue';

import { DeepSeek, OpenAI } from '../dist/index.js';

const apps: ReturnType<typeof createApp>[] = [];
const render = (component: Component, props: Record<string, unknown>) =>
  renderToString(createSSRApp(() => h(component, props)));
const mount = (view: () => ReturnType<typeof h>) => {
  const container = document.createElement('div');
  document.body.append(container);
  const app = createApp(view);
  apps.push(app);
  app.mount(container);
  return container;
};

afterEach(() => {
  apps.splice(0).forEach((app) => app.unmount());
  document.body.innerHTML = '';
});

describe('native SVG attributes', () => {
  it('preserves native attribute names during server rendering', async () => {
    const html = await render(OpenAI, {
      'alignment-baseline': 'middle',
      'aria-describedby': 'icon-description',
      'color-rendering': 'optimizeQuality',
      'data-icon-kind': 'brand',
      'stroke-width': 2,
      'text-rendering': 'geometricPrecision',
      'transform-origin': 'center',
    });

    expect(html).toContain('alignment-baseline="middle"');
    expect(html).toContain('aria-describedby="icon-description"');
    expect(html).toContain('color-rendering="optimizeQuality"');
    expect(html).toContain('data-icon-kind="brand"');
    expect(html).toContain('stroke-width="2"');
    expect(html).toContain('text-rendering="geometricPrecision"');
    expect(html).toContain('transform-origin="center"');
    expect(html).not.toMatch(/alignmentBaseline|colorRendering|textRendering|transformOrigin/);
  });

  it('preserves native attributes in the DOM and updates them reactively', async () => {
    const attrs = ref<Record<string, string>>({
      'alignment-baseline': 'middle',
      'text-rendering': 'geometricPrecision',
      'transform-origin': 'center',
    });
    const container = mount(() => h(OpenAI, attrs.value));
    const svg = container.querySelector('svg')!;

    expect(svg.getAttribute('alignment-baseline')).toBe('middle');
    expect(svg.getAttribute('text-rendering')).toBe('geometricPrecision');
    expect(svg.getAttribute('transform-origin')).toBe('center');
    expect(svg.hasAttribute('alignmentBaseline')).toBe(false);
    expect(svg.hasAttribute('textRendering')).toBe(false);
    expect(svg.hasAttribute('transformOrigin')).toBe(false);

    attrs.value = { 'text-rendering': 'optimizeSpeed', 'transform-origin': '0 0' };
    await nextTick();

    expect(svg.hasAttribute('alignment-baseline')).toBe(false);
    expect(svg.getAttribute('text-rendering')).toBe('optimizeSpeed');
    expect(svg.getAttribute('transform-origin')).toBe('0 0');
  });

  it('continues converting React SVG spellings used by shared sources', async () => {
    const props = {
      className: 'react-spelling',
      clipRule: 'evenodd',
      fillRule: 'nonzero',
      strokeWidth: 3,
      viewBox: '0 0 48 48',
    };
    const html = await render(OpenAI, props);
    expect(html).toContain('class="react-spelling"');
    expect(html).toContain('clip-rule="evenodd"');
    expect(html).toContain('fill-rule="nonzero"');
    expect(html).toContain('stroke-width="3"');
    expect(html).toContain('viewBox="0 0 48 48"');

    const svg = mount(() => h(OpenAI, props)).querySelector('svg')!;
    expect(svg.getAttribute('class')).toBe('react-spelling');
    expect(svg.getAttribute('clip-rule')).toBe('evenodd');
    expect(svg.getAttribute('fill-rule')).toBe('nonzero');
    expect(svg.getAttribute('stroke-width')).toBe('3');
    expect(svg.getAttribute('viewBox')).toBe('0 0 48 48');
  });
});

describe('kebab-case component props', () => {
  it('normalizes combination props through nested components', () => {
    const container = mount(() =>
      h(DeepSeek.Combine, {
        'extra': 'Cloud',
        'extra-class-name': 'caption',
        'extra-style': { fontSize: '18px' },
        'icon-props': { 'data-inner': 'mark' },
        'inverse': '',
        'show-logo': true,
        'show-text': false,
        'size': 40,
        'space-multiple': 0.5,
      }),
    );

    expect(container.querySelectorAll('svg')).toHaveLength(1);
    const svg = container.querySelector('svg')!;
    expect(svg.style.marginLeft).toBe('20px');
    expect(svg.getAttribute('data-inner')).toBe('mark');
    const caption = container.querySelector<HTMLElement>('.caption')!;
    expect(caption.textContent).toBe('Cloud');
    expect(caption.style.fontSize).toBe('18px');
  });

  it('normalizes avatar props through nested components', () => {
    const container = mount(() =>
      h(OpenAI.Avatar, {
        'icon-class-name': 'glyph',
        'icon-multiple': 0.5,
        'icon-style': { marginLeft: '2px' },
        'shape': 'square',
        'size': 40,
      }),
    );
    const svg = container.querySelector('svg')!;

    expect(svg.getAttribute('class')).toBe('glyph');
    expect(svg.style.transform).toBe('scale(0.5)');
    expect(svg.style.marginLeft).toBe('2px');
    expect((container.firstElementChild as HTMLElement).style.borderRadius).toBe('4px');
  });
});
