import { readableColor } from 'polished';
import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/IconAvatar';

import { COLOR_PRIMARY } from '../style';
import Mono from './Mono';

const Avatar = memo<IconAvatarProps>(({ size = 64, style, background, ...rest }) => {
  const bg = background || COLOR_PRIMARY;
  return (
    <IconAvatar
      background={bg}
      size={size}
      style={{ color: readableColor(bg), ...style }}
      {...rest}
    >
      <Mono size={size * 0.75} />
    </IconAvatar>
  );
});

export default Avatar;
