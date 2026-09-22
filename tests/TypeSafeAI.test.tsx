import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { TypeSafeAI } from '../src/icons';
import { toc } from '../src/toc';

describe('TypeSafeAI', () => {
  it('exposes the official pink brand color', () => {
    expect(TypeSafeAI.colorPrimary).toBe('#F386A1');
  });

  it('is categorized as a provider', () => {
    expect(toc.find((icon) => icon.id === 'TypeSafeAI')?.group).toBe('provider');
  });

  it('renders the official 24px TypeSafe AI mark and wordmark', () => {
    const markup = renderToStaticMarkup(<TypeSafeAI size={24} />);
    const textMarkup = renderToStaticMarkup(<TypeSafeAI.Text size={24} />);

    expect(markup).toContain('<title>TypeSafe AI</title>');
    expect(markup).toContain('viewBox="0 0 24 24"');
    expect(markup).toContain('M 12.756 2.928');
    expect(markup).not.toContain('stroke=');
    expect(textMarkup).toContain('<path');
    expect(textMarkup).not.toContain('<text');
    expect(textMarkup).not.toContain('width="24"');
  });
});
