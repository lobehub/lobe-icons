import { CSSProperties, forwardRef, useMemo } from 'react';

import DefaultAvatar from './DefaultAvatar';
import DefaultIcon from './DefaultIcon';
import { ModelProvider, ModelProviderKey, providerMappings } from './const';

export interface ProviderIconProps {
  className?: string;
  forceMono?: boolean;
  provider?: ModelProviderKey | string;
  size?: number;
  style?: CSSProperties;
  type?: 'avatar' | 'mono' | 'color' | 'combine' | 'combine-color';
}

const ProviderIcon = forwardRef<any, ProviderIconProps>(
  ({ provider: originProvider, size = 12, type = 'avatar', forceMono, ...rest }, ref) => {
    const Render = useMemo(() => {
      if (!originProvider) return;
      const provider = originProvider.toLowerCase();

      for (const item of providerMappings) {
        if (item.keywords.some((keyword) => new RegExp(keyword, 'i').test(provider))) {
          return item;
        }
      }
    }, [originProvider]);

    switch (type) {
      case 'avatar': {
        if (!Render?.Icon) return <DefaultAvatar ref={ref} size={size} {...rest} />;
        return <Render.Icon.Avatar ref={ref} size={size} {...(Render?.props || {})} {...rest} />;
      }
      case 'mono': {
        if (!Render?.Icon) return <DefaultIcon ref={ref} size={size} {...rest} />;
        if (!forceMono && originProvider === ModelProvider.LobeHub) {
          // @ts-ignore
          return <Render.Icon.Color ref={ref} size={size} {...(Render?.props || {})} {...rest} />;
        }
        return <Render.Icon ref={ref} size={size} {...(Render?.props || {})} {...rest} />;
      }
      case 'color': {
        if (!Render?.Icon) return <DefaultIcon ref={ref} size={size} {...rest} />;
        return Render.Icon?.Color ? (
          <Render.Icon.Color ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        ) : (
          <Render.Icon ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        );
      }
      case 'combine': {
        if (!Render?.Icon) return <DefaultIcon ref={ref} size={size} {...rest} />;
        return Render.Icon?.Combine ? (
          <Render.Icon.Combine ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        ) : Render.Icon?.Brand ? (
          <Render.Icon.Brand ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        ) : Render.Icon?.Text ? (
          <Render.Icon.Text ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        ) : (
          <Render.Icon ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        );
      }
      case 'combine-color': {
        if (!Render?.Icon) return <DefaultIcon ref={ref} size={size} {...rest} />;
        return Render.Icon?.Combine ? (
          <Render.Icon.Combine
            ref={ref}
            size={size}
            type={'color'}
            {...(Render?.props || {})}
            {...rest}
          />
        ) : Render.Icon?.BrandColor ? (
          <Render.Icon.BrandColor
            ref={ref}
            size={size}
            type={'color'}
            {...(Render?.props || {})}
            {...rest}
          />
        ) : Render.Icon?.Text ? (
          <Render.Icon.Text ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        ) : (
          <Render.Icon ref={ref} size={size} {...(Render?.props || {})} {...rest} />
        );
      }
      default: {
        return <DefaultIcon ref={ref} size={size} {...rest} />;
      }
    }
  },
);

export default ProviderIcon;
