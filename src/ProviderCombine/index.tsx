import { forwardRef, useMemo } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

import DefaultIcon from '@/ProviderIcon/DefaultIcon';
import { ModelProviderKey } from '@/ProviderIcon/const';

import { providerMappings } from './const';

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
        if (item.keywords.some((keyword) => new RegExp(keyword, 'i').test(provider))) {
          return item;
        }
      }
    }, [originProvider]);

    let icon = Render?.Icon ? (
      <Render.Icon size={size * (Render?.multiple || 1)} type={type} {...(Render?.props || {})} />
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
