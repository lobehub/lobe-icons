import React, { memo, useMemo } from 'react';
import { type ViewStyle } from 'react-native';

import { RNIconProps } from '@/types';

import { rnProviderMappings } from '../providerConfig';
import DefaultAvatar from './DefaultAvatar';
import DefaultIcon from './DefaultIcon';

export interface RNProviderIconProps extends RNIconProps {
  forceMono?: boolean;
  provider?: string;
  shape?: 'circle' | 'square';
  size?: number;
  style?: ViewStyle;
  type?: 'avatar' | 'mono' | 'color' | 'combine' | 'combine-color';
}

const RNProviderIcon = memo<RNProviderIconProps>(
  ({ provider: originProvider, size = 12, type = 'avatar', forceMono, shape, ...rest }) => {
    const Render = useMemo(() => {
      if (!originProvider) return undefined;
      const provider = originProvider.toLowerCase();

      for (const item of rnProviderMappings) {
        if (item.keywords.some((keyword) => keyword.toLowerCase() === provider)) {
          return item;
        }
      }
      return undefined;
    }, [originProvider]);

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
        if (!forceMono && originProvider === 'lobehub') {
          return Render.Icon?.Color ? <Render.Icon.Color {...props} /> : <Render.Icon {...props} />;
        }
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

RNProviderIcon.displayName = 'RNProviderIcon';

export default RNProviderIcon;
