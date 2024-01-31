import { CSSProperties, memo } from 'react';
import { Flexbox, type FlexboxProps } from 'react-layout-kit';

import { IconType } from '@/types';

export interface IconAvatarProps extends Omit<FlexboxProps, 'children'> {
  Icon: IconType;
  background: string;
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
  }) => {
    return (
      <Flexbox
        align={'center'}
        flex={'none'}
        justify={'center'}
        style={{
          background,
          borderRadius: shape === 'circle' ? '50%' : Math.floor(size * 0.1),
          color,
          height: size,
          width: size,
          ...style,
        }}
      >
        <Icon className={iconClassName} size={size * iconMultiple} style={iconStyle} />
      </Flexbox>
    );
  },
);

export default IconAvatar;
