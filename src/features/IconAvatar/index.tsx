'use client';

import { CSSProperties, forwardRef } from 'react';
import { Center, type FlexboxProps } from 'react-layout-kit';

import { IconType } from '@/types';

import { roundToEven } from './util';

export interface IconAvatarProps extends Omit<FlexboxProps, 'children'> {
  Icon?: IconType;
  background?: string;
  color?: string;
  iconClassName?: string;
  iconMultiple?: number;
  iconStyle?: CSSProperties;
  shape?: 'circle' | 'square';
  size: number;
}

const IconAvatar = forwardRef<HTMLDivElement, IconAvatarProps>(
  (
    {
      shape = 'circle',
      color = '#fff',
      background,
      size,
      style,
      iconMultiple = 0.75,
      Icon,
      iconStyle,
      iconClassName,
    },
    ref,
  ) => {
    return (
      <Center
        flex={'none'}
        ref={ref}
        style={{
          background,
          borderRadius: shape === 'circle' ? '50%' : Math.floor(size * 0.1),
          color,
          height: size,
          width: size,
          ...style,
        }}
      >
        {Icon && (
          <Icon
            className={iconClassName}
            size={roundToEven(size * iconMultiple)}
            style={iconStyle}
          />
        )}
      </Center>
    );
  },
);

export default IconAvatar;
