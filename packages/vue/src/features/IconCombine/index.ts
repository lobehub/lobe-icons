import { type Component, type CSSProperties, h, type HTMLAttributes } from 'vue';

import { defineIcon } from '../../runtime';
import type { IconAvatarProps } from '../IconAvatar';

export interface IconCombineProps extends HTMLAttributes {
  color?: string;
  extra?: string;
  extraClassName?: string;
  extraStyle?: CSSProperties;
  Icon?: Component;
  iconProps?: Partial<IconAvatarProps>;
  inverse?: boolean;
  showLogo?: boolean;
  showText?: boolean;
  size?: number;
  spaceMultiple?: number;
  Text?: Component;
  textMultiple?: number;
}

export default defineIcon<IconCombineProps>(
  () =>
    ({
      Icon,
      Text,
      style,
      color,
      size = 24,
      spaceMultiple = 1,
      textMultiple = 1,
      extra,
      extraStyle,
      extraClassName,
      showText = true,
      showLogo = true,
      iconProps,
      inverse,
      ...rest
    }) => {
      const logo =
        Icon && showLogo
          ? h(Icon, {
              size,
              ...iconProps,
              style: [
                { [inverse ? 'marginLeft' : 'marginRight']: `${size * spaceMultiple}px` },
                iconProps?.style,
              ],
            })
          : null;
      const text = Text && showText ? h(Text, { size: size * textMultiple }) : null;
      return h(
        'div',
        {
          ...rest,
          style: [
            {
              alignItems: 'center',
              color,
              display: 'flex',
              flex: 'none',
              justifyContent: 'flex-start',
            },
            style,
          ],
        },
        [
          ...(inverse ? [text, logo] : [logo, text]),
          extra
            ? h(
                'span',
                {
                  class: extraClassName,
                  style: [
                    { fontSize: `${size * textMultiple * 0.95}px`, lineHeight: 1 },
                    extraStyle,
                  ],
                },
                extra,
              )
            : null,
        ],
      );
    },
);
