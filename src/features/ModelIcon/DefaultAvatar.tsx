import { useTheme } from 'antd-style';
import { memo } from 'react';
import { Center } from 'react-layout-kit';

import { IconAvatarProps } from '@/features/IconAvatar';

import DefaultIcon from './DefaultIcon';

const DefaultAvatar = memo<Omit<IconAvatarProps, 'Icon'>>(
  ({
    shape = 'circle',
    color,
    background,
    size,
    style,
    iconMultiple = 0.6,
    iconStyle,
    iconClassName,
  }) => {
    const theme = useTheme();
    return (
      <Center
        flex={'none'}
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
