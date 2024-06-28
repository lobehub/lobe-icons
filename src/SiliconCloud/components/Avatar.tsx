import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/IconAvatar';

import { TITLE } from '../style';
import Color from './Color';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, ...rest }) => {
  return (
    <IconAvatar
      Icon={Color}
      aria-label={TITLE}
      background={background}
      iconMultiple={1.12}
      shape={'square'}
      {...rest}
    />
  );
});

export default Avatar;
