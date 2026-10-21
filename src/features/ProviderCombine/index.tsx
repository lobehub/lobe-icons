'use client';

import type { FlexboxProps } from '@lobehub/ui';
import { Flexbox } from '@lobehub/ui';
import { memo, useMemo } from 'react';

import { providerMappings } from '../providerConfig';
import type { ModelProviderKey } from '../providerEnum';
import DefaultIcon from '../ProviderIcon/DefaultIcon';

export interface ProviderCombineProps extends Omit<
  FlexboxProps,
  'children' | 'horizontal' | 'height' | 'width' | 'align' | 'justify'
> {
  provider?: ModelProviderKey | string;
  size?: number;
  type?: 'mono' | 'color';
}

const ProviderCombine = memo<ProviderCombineProps>(
  ({ provider: originProvider, size = 12, type = 'color', ...rest }) => {
    const Render = useMemo(() => {
      if (!originProvider) return;
      const provider = originProvider.toLowerCase();

      for (const item of providerMappings) {
        if (item.keywords.some((keyword) => keyword.toLowerCase() === provider)) {
          return item;
        }
      }
    }, [originProvider]);

    const iconProps = {
      size: size * (Render?.combineMultiple || 1),
      type,
      ...Render?.props,
    };

    const icon = Render?.Combine ? (
      <Render.Combine {...iconProps} />
    ) : Render?.Icon?.Combine ? (
      <Render.Icon.Combine {...iconProps} />
    ) : Render?.Icon?.Text ? (
      <Render.Icon.Text {...iconProps} />
    ) : (
      <DefaultIcon size={size} />
    );

    return (
      <Flexbox
        horizontal
        align={'center'}
        flex={'none'}
        height={size * 1.5}
        width={'fit-content'}
        {...rest}
      >
        {icon}
      </Flexbox>
    );
  },
);

ProviderCombine.displayName = 'ProviderCombine';

export default ProviderCombine;
