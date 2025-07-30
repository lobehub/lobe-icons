'use client';

import { CSSProperties, Suspense, memo, useEffect, useMemo, useState } from 'react';

import { modelMappings } from '../modelConfig';
import DefaultAvatar from './DefaultAvatar';
import DefaultIcon from './DefaultIcon';

export interface ModelIconProps {
  className?: string;
  model?: string;
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

const ModelIcon = memo<ModelIconProps>(
  ({ model: originModel, size = 12, type = 'avatar', shape, ...rest }) => {
    const [IconComponent, setIconComponent] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const mappingItem = useMemo(() => {
      if (!originModel) return null;
      const model = originModel.toLowerCase();
      for (const item of modelMappings) {
        if (item.keywords.some((keyword) => new RegExp(keyword, 'i').test(model))) {
          return item;
        }
      }
      return null;
    }, [originModel]);

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

ModelIcon.displayName = 'ModelIcon';

export default ModelIcon;
