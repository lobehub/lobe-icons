import { describe, expect, it } from 'vitest';

import { scopeSvgIds } from '@/components/IconPreview/scopeSvgIds';

describe('scopeSvgIds', () => {
  it('prefixes ids and keeps url/href references in sync', () => {
    const svg = `
      <svg>
        <linearGradient id="Gradient" />
        <g id="Group">
          <use href="#Gradient" xlink:href="#Gradient" />
          <path id="Path" fill="url(#Gradient)" />
          <path fill="url('#Gradient')" />
        </g>
      </svg>
    `;

    const scoped = scopeSvgIds(svg, ':editor-1:');

    expect(scoped).toContain('id="editor-1-Gradient"');
    expect(scoped).toContain('id="editor-1-Group"');
    expect(scoped).toContain('id="editor-1-Path"');
    expect(scoped).toContain('fill="url(#editor-1-Gradient)"');
    expect(scoped).toContain('fill="url(\'#editor-1-Gradient\')"');
    expect(scoped).toContain('href="#editor-1-Gradient"');
    expect(scoped).toContain('xlink:href="#editor-1-Gradient"');
    expect(scoped).not.toContain('id="Gradient"');
    expect(scoped).not.toContain('url(#Gradient)');
  });

  it('rewrites ARIA idrefs and leaves data-id attributes alone', () => {
    const svg =
      '<svg data-id="layer" aria-labelledby="title hint"><title id="title">Logo</title><desc id="hint">Mark</desc></svg>';

    const scoped = scopeSvgIds(svg, 'preview');

    expect(scoped).toContain('data-id="layer"');
    expect(scoped).toContain('id="preview-title"');
    expect(scoped).toContain('id="preview-hint"');
    expect(scoped).toContain('aria-labelledby="preview-title preview-hint"');
    expect(scoped).not.toContain('id="title"');
  });

  it('is a no-op when the svg has no ids', () => {
    const svg = '<svg><path fill="#3762FF" /></svg>';
    expect(scopeSvgIds(svg, 'preview')).toBe(svg);
  });
});
