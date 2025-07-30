'use client';

import { Suspense, memo } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

import LoadingPlaceholder from '../LoadingPlaceholder';
import DefaultIcon from '../ProviderIcon/DefaultIcon';
import { ModelProviderKey } from '../providerEnum';
import { useIconLoader } from '../useIconLoader';
import { useProviderMapping } from '../useMappingCache';

export interface ProviderCombineProps
  extends Omit<FlexboxProps, 'children' | 'horizontal' | 'height' | 'width' | 'align' | 'justify'> {
  provider?: ModelProviderKey | string;
  size?: number;
  type?: 'mono' | 'color';
}

const ProviderCombine = memo<ProviderCombineProps>(
  ({ provider: originProvider, size = 12, type = 'color', ...rest }) => {
    const mappingItem = useProviderMapping(originProvider);

    // 只有在没有自定义Combine组件时才加载图标
    const shouldLoadIcon = mappingItem && !mappingItem.Combine;
    const { IconComponent, loading } = useIconLoader(shouldLoadIcon ? mappingItem : null);

    const iconProps = {
      size: size * (mappingItem?.combineMultiple || 1),
      type,
      ...mappingItem?.props,
    };

    // Use custom Combine component if available
    if (mappingItem?.Combine) {
      return (
        <Flexbox
          align={'center'}
          flex={'none'}
          height={size * 1.5}
          horizontal
          width={'fit-content'}
          {...rest}
        >
          <mappingItem.Combine {...iconProps} />
        </Flexbox>
      );
    }

    if (loading) {
      return <LoadingPlaceholder size={size} type={'combine'} />;
    }

    const renderIcon = () => {
      if (!IconComponent) return <DefaultIcon size={size} />;

      return IconComponent?.Combine ? (
        <IconComponent.Combine {...iconProps} />
      ) : IconComponent?.Text ? (
        <IconComponent.Text {...iconProps} />
      ) : (
        <DefaultIcon size={size} />
      );
    };

    return (
      <Flexbox
        align={'center'}
        flex={'none'}
        height={size * 1.5}
        horizontal
        width={'fit-content'}
        {...rest}
      >
        <Suspense fallback={<LoadingPlaceholder size={size} type={'combine'} />}>
          {renderIcon()}
        </Suspense>
      </Flexbox>
    );
  },
);

ProviderCombine.displayName = 'ProviderCombine';

export default ProviderCombine;
