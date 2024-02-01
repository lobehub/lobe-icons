import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/IconAvatar';

import { COLOR_PRIMARY } from '../style';
import Color from './Color';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, ...rest }) => {
  return (
    <IconAvatar Icon={Color} background={background || COLOR_PRIMARY} color={'#fff'} {...rest} />
  );
});

export default Avatar;
