'use client';

import { useThemeMode } from 'antd-style';
import { CSSProperties, memo } from 'react';
import { Center, type CenterProps } from 'react-layout-kit';

import { IconType } from '@/types';

import { getAvatarShadow, roundToEven } from './util';

export interface IconAvatarProps extends Omit<CenterProps, 'children'> {
  Icon?: IconType;
  background?: string;
  color?: string;
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
          width: size,
          ...style,
        }}
        {...rest}
      >
        {Icon && (
          <Icon
            className={iconClassName}
            color={color}
            size={roundToEven(size * iconMultiple)}
            style={iconStyle}
          />
        )}
      </Center>
    );
  },
);

export default IconAvatar;
