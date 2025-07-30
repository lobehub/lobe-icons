'use client';

import { CSSProperties, Suspense, memo } from 'react';

import DefaultAvatar from '../DefaultAvatar';
import LoadingPlaceholder from '../LoadingPlaceholder';
import { useIconLoader } from '../useIconLoader';
import { useModelMapping } from '../useMappingCache';
import DefaultIcon from './DefaultIcon';

export interface ModelIconProps {
  className?: string;
  model?: string;
  shape?: 'circle' | 'square';
  size?: number;
  style?: CSSProperties;
  type?: 'avatar' | 'mono' | 'color' | 'combine' | 'combine-color';
}

const ModelIcon = memo<ModelIconProps>(
  ({ model: originModel, size = 12, type = 'avatar', shape, ...rest }) => {
    const mappingItem = useModelMapping(originModel);
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

ModelIcon.displayName = 'ModelIcon';

export default ModelIcon;
