'use client';

import { CSSProperties, memo, useMemo } from 'react';

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

const ModelIcon = memo<ModelIconProps>(
  ({ model: originModel, size = 12, type = 'avatar', shape, ...rest }) => {
    const Render = useMemo(() => {
      if (!originModel) return;
      const model = originModel.toLowerCase();
      for (const item of modelMappings) {
        if (item.keywords.some((keyword) => new RegExp(keyword, 'i').test(model))) {
          return item;
        }
      }
    }, [originModel]);

    const props = {
      size,
      ...Render?.props,
      ...rest,
    };

    switch (type) {
      case 'avatar': {
        if (!Render?.Icon) return <DefaultAvatar shape={shape} {...props} />;
        return <Render.Icon.Avatar shape={shape} {...props} />;
      }
      case 'mono': {
        if (!Render?.Icon) return <DefaultIcon {...props} />;
        return <Render.Icon {...props} />;
      }
      case 'color': {
        if (!Render?.Icon) return <DefaultIcon {...props} />;
        return Render.Icon?.Color ? <Render.Icon.Color {...props} /> : <Render.Icon {...props} />;
      }
      case 'combine': {
        if (!Render?.Icon) return <DefaultIcon {...props} />;
        return Render.Icon?.Combine ? (
          <Render.Icon.Combine type={'mono'} {...props} />
        ) : Render.Icon?.Brand ? (
          <Render.Icon.Brand {...props} />
        ) : Render.Icon?.Text ? (
          <Render.Icon.Text {...props} />
        ) : (
          <Render.Icon {...props} />
        );
      }
      case 'combine-color': {
        if (!Render?.Icon) return <DefaultIcon {...props} />;
        return Render.Icon?.Combine ? (
          <Render.Icon.Combine type={'color'} {...props} />
        ) : Render.Icon?.BrandColor ? (
          <Render.Icon.BrandColor {...props} />
        ) : Render.Icon?.Text ? (
          <Render.Icon.Text {...props} />
        ) : (
          <Render.Icon {...props} />
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
