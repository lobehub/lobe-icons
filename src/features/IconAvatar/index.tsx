'use client';

import { Center, type CenterProps, useThemeMode } from '@lobehub/ui';
import type { CSSProperties } from 'react';
import { memo } from 'react';

import type { IconType } from '@/types';

import { getAvatarShadow } from './util';

export interface IconAvatarProps extends Omit<CenterProps, 'children'> {
  background?: string;
  color?: string;
  Icon?: IconType;
  iconClassName?: string;
  iconMultiple?: number;
  iconStyle?: CSSProperties;
  shape?: 'circle' | 'square';
  size: number;
}

const IconAvatar = memo<IconAvatarProps>(
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
  }) => {
    const { isDarkMode } = useThemeMode();
    return (
      <Center
        flex={'none'}
        style={{
          background,
          borderRadius: shape === 'circle' ? '50%' : Math.floor(size * 0.1),
          boxShadow: getAvatarShadow(isDarkMode, background),
          color,
          height: size,
          overflow: 'hidden',
          width: size,
          ...style,
        }}
        {...rest}
      >
        {Icon && (
          <Icon
            className={iconClassName}
            color={color}
            size={size}
            style={{
              transform: `scale(${iconMultiple})`,
              ...iconStyle,
            }}
          />
        )}
      </Center>
    );
  },
);

export default IconAvatar;
