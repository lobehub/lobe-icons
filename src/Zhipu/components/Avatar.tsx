import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/IconAvatar';

import { COLOR_PRIMARY } from '../style';
import Mono from './Mono';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, ...rest }) => {
  return <IconAvatar Icon={Mono} background={background || COLOR_PRIMARY} {...rest} />;
});

export default Avatar;
