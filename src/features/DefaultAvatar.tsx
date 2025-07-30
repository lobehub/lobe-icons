import { useTheme } from 'antd-style';
import { CSSProperties, memo } from 'react';
import { Center } from 'react-layout-kit';

import type { IconAvatarProps } from './IconAvatar';

interface DefaultIconProps {
  className?: string;
  color?: string;
  size?: number;
  style?: CSSProperties;
}

const DefaultIcon = memo<DefaultIconProps>(({ size = 12, color, ...rest }) => (
  <svg
    fill={color || 'currentColor'}
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
));

const DefaultAvatar = memo<Omit<IconAvatarProps, 'Icon'>>(
  ({
    shape = 'circle',
    color,
    background,
    size = 24,
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

DefaultAvatar.displayName = 'DefaultAvatar';

export default DefaultAvatar;
