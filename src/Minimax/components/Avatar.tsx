import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/IconAvatar';

import { COLOR_GRADIENT } from '../style';
import Mono from './Mono';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, size, ...rest }) => {
  return (
    <IconAvatar
      Icon={Mono}
      background={background || COLOR_GRADIENT}
      iconStyle={{ marginLeft: -size * 0.05 }}
      size={size}
      {...rest}
    />
  );
});

export default Avatar;
