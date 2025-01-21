'use client';

import { forwardRef, useMemo } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

import DefaultIcon from '../ProviderIcon/DefaultIcon';
import { providerMappings } from '../providerConfig';
import { ModelProviderKey } from '../providerEnum';

export interface ProviderCombineProps
  extends Omit<FlexboxProps, 'children' | 'horizontal' | 'height' | 'width' | 'align' | 'justify'> {
  provider?: ModelProviderKey | string;
  size?: number;
  type?: 'mono' | 'color';
}

const ProviderCombine = forwardRef<HTMLDivElement, ProviderCombineProps>(
  ({ provider: originProvider, size = 12, type = 'color', ...rest }, ref) => {
    const Render = useMemo(() => {
      if (!originProvider) return;
      const provider = originProvider.toLowerCase();

      for (const item of providerMappings) {
        if (item.keywords.some((keyword) => keyword.toLowerCase() === provider)) {
          return item;
        }
      }
    }, [originProvider]);

    let icon = Render?.Combine ? (
      <Render.Combine
        size={size * (Render?.combineMultiple || 1)}
        type={type}
        {...(Render?.props || {})}
      />
    ) : Render?.Icon?.Combine ? (
      <Render.Icon.Combine
        size={size * (Render?.combineMultiple || 1)}
        type={type}
        {...(Render?.props || {})}
      />
    ) : (
      <DefaultIcon size={size} />
    );

    return (
      <Flexbox
        align={'center'}
        flex={'none'}
        height={size * 1.5}
        horizontal
        ref={ref}
        width={'fit-content'}
        {...rest}
      >
        {icon}
      </Flexbox>
    );
  },
);

export default ProviderCombine;
