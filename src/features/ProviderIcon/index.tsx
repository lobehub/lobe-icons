'use client';

import { CSSProperties, memo, useMemo } from 'react';

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

const ProviderIcon = memo<ProviderIconProps>(
  ({ provider: originProvider, size = 12, type = 'avatar', forceMono, shape, ...rest }) => {
    const Render = useMemo(() => {
      if (!originProvider) return;
      const provider = originProvider.toLowerCase();

      for (const item of providerMappings) {
        if (item.keywords.some((keyword) => keyword.toLowerCase() === provider)) {
          return item;
        }
      }
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
        if (!forceMono && originProvider === ModelProvider.LobeHub) {
          // @ts-ignore
          return <Render.Icon.Color {...props} />;
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

ProviderIcon.displayName = 'ProviderIcon';

export default ProviderIcon;
