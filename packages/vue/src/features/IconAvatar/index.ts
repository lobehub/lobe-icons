import { type Component, type CSSProperties, h, type HTMLAttributes } from 'vue';

import { defineIcon } from '../../runtime';

export interface IconAvatarProps extends HTMLAttributes {
  background?: string;
  color?: string;
  Icon?: Component;
  iconClassName?: string;
  iconMultiple?: number;
  iconStyle?: CSSProperties;
  shape?: 'circle' | 'square';
  size: number;
}

export default defineIcon<IconAvatarProps>(
  () =>
    ({
      shape = 'circle',
      color = '#fff',
      background,
      size,
      style,
      iconMultiple = 0.75,
      Icon,
      iconStyle,
      iconClassName,
      ...rest
    }) =>
      h(
        'div',
        {
          ...rest,
          style: [
            {
              alignItems: 'center',
              background,
              borderRadius: shape === 'circle' ? '50%' : `${Math.floor(size * 0.1)}px`,
              color,
              display: 'flex',
              flex: 'none',
              height: `${size}px`,
              justifyContent: 'center',
              overflow: 'hidden',
              width: `${size}px`,
            },
            style,
          ],
        },
        Icon
          ? [
              h(Icon, {
                class: iconClassName,
                color,
                size,
                style: [{ transform: `scale(${iconMultiple})` }, iconStyle],
              }),
            ]
          : [],
      ),
);
