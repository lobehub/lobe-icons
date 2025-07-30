'use client';

import { Suspense, memo, useEffect, useMemo, useState } from 'react';
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

const LoadingPlaceholder = memo<{ size: number }>(({ size }) => (
  <div
    style={{
      backgroundColor: 'rgba(0,0,0,0.1)',
      borderRadius: '2px',
      height: size,
      width: size * 1.5,
    }}
  />
));

const ProviderCombine = memo<ProviderCombineProps>(
  ({ provider: originProvider, size = 12, type = 'color', ...rest }) => {
    const [IconComponent, setIconComponent] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const mappingItem = useMemo(() => {
      if (!originProvider) return null;
      const provider = originProvider.toLowerCase();

      for (const item of providerMappings) {
        if (item.keywords.some((keyword) => keyword.toLowerCase() === provider)) {
          return item;
        }
      }
      return null;
    }, [originProvider]);

    useEffect(() => {
      if (!mappingItem) {
        setIconComponent(null);
        setLoading(false);
        return;
      }

      // If custom Combine component exists, don't load icon
      if (mappingItem.Combine) {
        setIconComponent(null);
        setLoading(false);
        return;
      }

      setLoading(true);
      mappingItem
        .iconImport()
        .then((module) => {
          setIconComponent(module.default);
        })
        .catch((error) => {
          console.error('Failed to load icon:', error);
          setIconComponent(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [mappingItem]);

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
      return (
        <Flexbox
          align={'center'}
          flex={'none'}
          height={size * 1.5}
          horizontal
          width={'fit-content'}
          {...rest}
        >
          <LoadingPlaceholder size={size} />
        </Flexbox>
      );
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
        <Suspense fallback={<LoadingPlaceholder size={size} />}>{renderIcon()}</Suspense>
      </Flexbox>
    );
  },
);

ProviderCombine.displayName = 'ProviderCombine';

export default ProviderCombine;
