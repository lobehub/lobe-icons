import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import ProviderCombine from '../src/features/ProviderCombine';
import ProviderIcon from '../src/features/ProviderIcon';

describe('ProviderIcon brand resolution', () => {
  it.each(['typesafe', 'TypeSafe', 'typesafe-ai', 'typesafeai'])(
    'uses TypeSafe AI for provider %s',
    (provider) => {
      const markup = renderToStaticMarkup(<ProviderIcon provider={provider} type={'mono'} />);

      expect(markup).toContain('<title>TypeSafe AI</title>');
    },
  );

  it('uses TypeSafe AI in ProviderCombine for typesafe', () => {
    const markup = renderToStaticMarkup(<ProviderCombine provider={'typesafe'} type={'mono'} />);

    expect(markup).toContain('TypeSafe AI');
  });
});
