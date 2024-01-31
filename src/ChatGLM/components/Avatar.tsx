import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/IconAvatar';

import { COLOR_PRIMARY } from '../style';
import Mono from './Mono';

const Avatar = memo<IconAvatarProps>(({ size = 24, style, background, ...rest }) => {
  const bg = background || COLOR_PRIMARY;
  return (
    <IconAvatar background={bg} size={size} style={{ color: '#fff', ...style }} {...rest}>
      <Mono size={size * 0.75} style={{ marginLeft: size * 0.1 }} />
    </IconAvatar>
  );
});

export default Avatar;
