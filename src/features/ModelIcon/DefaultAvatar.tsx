import { useTheme } from 'antd-style';
import { forwardRef } from 'react';
import { Center } from 'react-layout-kit';

import { IconAvatarProps } from '@/features/IconAvatar';

import DefaultIcon from './DefaultIcon';

const DefaultAvatar = forwardRef<HTMLDivElement, Omit<IconAvatarProps, 'Icon'>>(
  (
    {
      shape = 'circle',
      color,
      background,
      size,
      style,
      iconMultiple = 0.6,
      iconStyle,
      iconClassName,
    },
    ref,
  ) => {
    const theme = useTheme();
    return (
      <Center
        flex={'none'}
        ref={ref}
        style={{
          background: background || theme.colorFillSecondary,
          borderRadius: shape === 'circle' ? '50%' : Math.floor(size * 0.1),
          color,
          height: size,
          width: size,
          ...style,
        }}
      >
        <DefaultIcon
          className={iconClassName}
          color={color}
          size={size * iconMultiple}
          style={iconStyle}
        />
      </Center>
    );
  },
);

export default DefaultAvatar;
