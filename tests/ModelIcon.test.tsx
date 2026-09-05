import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import MetaColor from '../src/Meta/components/Color';
import ModelIcon from '../src/features/ModelIcon';

describe('ModelIcon brand resolution', () => {
  it('renders the Meta color icon for Muse Spark', () => {
    const markup = renderToStaticMarkup(
      <ModelIcon model={'muse-spark-1.3'} size={32} type={'color'} />,
    );

    expect(markup).toBe(renderToStaticMarkup(<MetaColor size={32} />));
  });

  it.each([
    'muse-spark-1.3',
    'muse-spark',
    'meta/muse-spark-1.3',
    'aihubmix/muse-spark-1.3',
    'Muse-Spark-1.3',
  ])('uses Meta for %s instead of iFlyTek Spark', (model) => {
    const markup = renderToStaticMarkup(<ModelIcon model={model} type={'mono'} />);

    expect(markup).toContain('<title>Meta</title>');
    expect(markup).not.toContain('<title>MetaAI</title>');
    expect(markup).not.toContain('<title>Spark</title>');
  });

  it.each(['spark', 'spark-v3.5', 'generalv3.5', '4.0ultra'])(
    'preserves the iFlyTek Spark icon for %s',
    (model) => {
      const markup = renderToStaticMarkup(<ModelIcon model={model} type={'mono'} />);

      expect(markup).toContain('<title>Spark</title>');
    },
  );

  it('preserves the Meta icon for Llama models', () => {
    const markup = renderToStaticMarkup(
      <ModelIcon model={'meta-llama/llama-3.3-70b'} type={'mono'} />,
    );

    expect(markup).toContain('<title>Meta</title>');
  });
});
