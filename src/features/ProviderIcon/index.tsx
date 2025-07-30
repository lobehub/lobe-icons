'use client';

import { CSSProperties, Suspense, memo } from 'react';

import DefaultAvatar from '../DefaultAvatar';
import LoadingPlaceholder from '../LoadingPlaceholder';
import { ModelProvider, ModelProviderKey } from '../providerEnum';
import { useIconLoader } from '../useIconLoader';
import { useProviderMapping } from '../useMappingCache';
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

const ProviderIcon = memo<ProviderIconProps>(
  ({ provider: originProvider, size = 12, type = 'avatar', forceMono, shape, ...rest }) => {
    const mappingItem = useProviderMapping(originProvider);
    const { IconComponent, loading } = useIconLoader(mappingItem);

    const props = {
      size,
      ...mappingItem?.props,
      ...rest,
    };

    if (loading) {
      return <LoadingPlaceholder shape={shape} size={size} type={type} />;
    }

    switch (type) {
      case 'avatar': {
        if (!IconComponent) return <DefaultAvatar shape={shape} {...props} />;
        return (
          <Suspense fallback={<LoadingPlaceholder shape={shape} size={size} type={type} />}>
            <IconComponent.Avatar shape={shape} {...props} />
          </Suspense>
        );
      }
      case 'mono': {
        if (!IconComponent) return <DefaultIcon {...props} />;
        if (!forceMono && originProvider === ModelProvider.LobeHub) {
          return (
            <Suspense fallback={<LoadingPlaceholder shape={shape} size={size} type={type} />}>
              <IconComponent.Color {...props} />
            </Suspense>
          );
        }
        return (
          <Suspense fallback={<LoadingPlaceholder shape={shape} size={size} type={type} />}>
            <IconComponent {...props} />
          </Suspense>
        );
      }
      case 'color': {
        if (!IconComponent) return <DefaultIcon {...props} />;
        return (
          <Suspense fallback={<LoadingPlaceholder shape={shape} size={size} type={type} />}>
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
          <Suspense fallback={<LoadingPlaceholder shape={shape} size={size} type={type} />}>
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
          <Suspense fallback={<LoadingPlaceholder shape={shape} size={size} type={type} />}>
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
