import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import ModelIcon from '../src/features/ModelIcon';
import MuseColor from '../src/Muse/components/Color';

describe('ModelIcon brand resolution', () => {
  it('renders the Muse color icon for Muse Spark', () => {
    const markup = renderToStaticMarkup(
      <ModelIcon model={'muse-spark-1.3'} size={32} type={'color'} />,
    );

    expect(markup).toBe(renderToStaticMarkup(<MuseColor size={32} />));
  });

  it.each([
    'muse-spark-1.3',
    'muse-spark',
    'meta/muse-spark-1.3',
    'aihubmix/muse-spark-1.3',
    'Muse-Spark-1.3',
  ])('uses Muse for %s instead of iFlyTek Spark', (model) => {
    const markup = renderToStaticMarkup(<ModelIcon model={model} type={'mono'} />);

    expect(markup).toContain('<title>Muse</title>');
    expect(markup).not.toContain('<title>MetaAI</title>');
    expect(markup).not.toContain('<title>Spark</title>');
  });

  it.each(['muse-wonder-1.0', 'muse-wonder', 'meta/muse-wonder', 'Muse-Wonder-1.0'])(
    'uses Muse for Muse Wonder model %s',
    (model) => {
      const markup = renderToStaticMarkup(<ModelIcon model={model} type={'mono'} />);

      expect(markup).toContain('<title>Muse</title>');
    },
  );

  it.each(['muse-image', 'muse-image-1', 'meta/muse-image', 'muse-video', 'muse-video-1.0'])(
    'uses Muse for Muse Image/Video model %s',
    (model) => {
      const markup = renderToStaticMarkup(<ModelIcon model={model} type={'mono'} />);

      expect(markup).toContain('<title>Muse</title>');
    },
  );

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

  it.each([
    'typesafe/jev-1.14',
    'jev-1.14',
    'jev-1.14.0',
    'jev-1.13.0',
    'jev-latest',
    'jev-preview',
    'Jev-1.14',
    'TypeSafe/Jev-1.14',
  ])('uses TypeSafe AI for Jev model %s', (model) => {
    const markup = renderToStaticMarkup(<ModelIcon model={model} type={'mono'} />);

    expect(markup).toContain('<title>TypeSafe AI</title>');
  });

  it.each(['kjev-1.14', 'jevons-1', 'abc/jevx-1', 'gpt-4o'])(
    'does not use TypeSafe AI for unrelated model %s',
    (model) => {
      const markup = renderToStaticMarkup(<ModelIcon model={model} type={'mono'} />);

      expect(markup).not.toContain('<title>TypeSafe AI</title>');
    },
  );

  it.each(['bge-m3', 'BAAI/bge-m3', 'Pro/BAAI/bge-m3', '@cf/baai/bge-base-en-v1.5'])(
    'uses BAAI for BGE model %s',
    (model) => {
      const markup = renderToStaticMarkup(<ModelIcon model={model} type={'mono'} />);

      expect(markup).toContain('<title>BAAI</title>');
    },
  );
});
