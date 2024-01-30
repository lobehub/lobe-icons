import { memo } from 'react';
import { Flexbox, type FlexboxProps } from 'react-layout-kit';

export interface IconAvatarProps extends FlexboxProps {
  background: string;
  shape?: 'circle' | 'square';
  size: number;
}

const IconAvatar = memo<IconAvatarProps>(
  ({ shape = 'circle', background, size, style, children }) => {
    return (
      <Flexbox
        align={'center'}
        flex={'none'}
        justify={'center'}
        style={{
          background,
          borderRadius: shape === 'circle' ? '50%' : Math.floor(size * 0.1),
          height: size,
          width: size,
          ...style,
        }}
      >
        {children}
      </Flexbox>
    );
  },
);

export default IconAvatar;
