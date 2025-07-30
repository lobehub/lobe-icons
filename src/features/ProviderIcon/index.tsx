'use client';

import { CSSProperties, Suspense, memo, useEffect, useMemo, useState } from 'react';

import { providerMappings } from '../providerConfig';
import { ModelProvider, ModelProviderKey } from '../providerEnum';
import DefaultAvatar from './DefaultAvatar';
import DefaultIcon from './DefaultIcon';

export interface ProviderIconProps {
  className?: string;
  forceMono?: boolean;
  provider?: ModelProviderKey | string;
  shape?: 'circle' | 'square';
  size?: number;
  style?: CSSProperties;
  type?: 'avatar' | 'mono' | 'color' | 'combine' | 'combine-color';
}

const LoadingPlaceholder = memo<{ shape?: 'circle' | 'square'; size: number }>(
  ({ size, shape }) => (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: shape === 'circle' ? '50%' : '2px',
        height: size,
        width: size,
      }}
    />
  ),
);

const ProviderIcon = memo<ProviderIconProps>(
  ({ provider: originProvider, size = 12, type = 'avatar', forceMono, shape, ...rest }) => {
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

    const props = {
      size,
      ...mappingItem?.props,
      ...rest,
    };

    if (loading) {
      return <LoadingPlaceholder shape={shape} size={size} />;
    }

    switch (type) {
      case 'avatar': {
        if (!IconComponent) return <DefaultAvatar shape={shape} {...props} />;
        return (
          <Suspense fallback={<LoadingPlaceholder shape={shape} size={size} />}>
            <IconComponent.Avatar shape={shape} {...props} />
          </Suspense>
        );
      }
      case 'mono': {
        if (!IconComponent) return <DefaultIcon {...props} />;
        if (!forceMono && originProvider === ModelProvider.LobeHub) {
          return (
            <Suspense fallback={<LoadingPlaceholder shape={shape} size={size} />}>
              <IconComponent.Color {...props} />
            </Suspense>
          );
        }
        return (
          <Suspense fallback={<LoadingPlaceholder shape={shape} size={size} />}>
            <IconComponent {...props} />
          </Suspense>
        );
      }
      case 'color': {
        if (!IconComponent) return <DefaultIcon {...props} />;
        return (
          <Suspense fallback={<LoadingPlaceholder shape={shape} size={size} />}>
            {IconComponent?.Color ? (
              <IconComponent.Color {...props} />
            ) : (
              <IconComponent {...props} />
            )}
          </Suspense>
        );
      }
      case 'combine': {
        if (!IconComponent) return <DefaultIcon {...props} />;
        return (
          <Suspense fallback={<LoadingPlaceholder shape={shape} size={size} />}>
            {IconComponent?.Combine ? (
              <IconComponent.Combine type={'mono'} {...props} />
            ) : IconComponent?.Brand ? (
              <IconComponent.Brand {...props} />
            ) : IconComponent?.Text ? (
              <IconComponent.Text {...props} />
            ) : (
              <IconComponent {...props} />
            )}
          </Suspense>
        );
      }
      case 'combine-color': {
        if (!IconComponent) return <DefaultIcon {...props} />;
        return (
          <Suspense fallback={<LoadingPlaceholder shape={shape} size={size} />}>
            {IconComponent?.Combine ? (
              <IconComponent.Combine type={'color'} {...props} />
            ) : IconComponent?.BrandColor ? (
              <IconComponent.BrandColor {...props} />
            ) : IconComponent?.Text ? (
              <IconComponent.Text {...props} />
            ) : (
              <IconComponent {...props} />
            )}
          </Suspense>
        );
      }
      default: {
        return <DefaultIcon {...props} />;
      }
    }
  },
);

ProviderIcon.displayName = 'ProviderIcon';

export default ProviderIcon;
