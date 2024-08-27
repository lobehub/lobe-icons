import { CSSProperties, memo, useMemo } from 'react';

import DefaultIcon from '@/ProviderIcon/DefaultIcon';
import { ModelProviderKey } from '@/ProviderIcon/const';

import { providerMappings } from './const';

export interface ProviderCombineProps {
  className?: string;
  provider?: ModelProviderKey | string;
  size?: number;
  style?: CSSProperties;
  type?: 'mono' | 'color';
}

const ProviderCombine = memo<ProviderCombineProps>(
  ({ provider: originProvider, size = 12, type = 'color', ...rest }) => {
    const Render = useMemo(() => {
      if (!originProvider) return;
      const provider = originProvider.toLowerCase();

      for (const item of providerMappings) {
        if (item.keywords.some((keyword) => new RegExp(keyword, 'i').test(provider))) {
          return item;
        }
      }
    }, [originProvider]);

    if (!Render?.Icon) return <DefaultIcon size={size} {...rest} />;

    return (
      <Render.Icon
        size={size * (Render?.multiple || 1)}
        type={type}
        {...(Render?.props || {})}
        {...rest}
      />
    );
  },
);

export default ProviderCombine;
