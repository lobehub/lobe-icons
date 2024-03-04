import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/IconAvatar';

import { COLOR_GRADIENT, TITLE } from '../style';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, ...rest }) => {
  return <IconAvatar aria-label={TITLE} background={background || COLOR_GRADIENT} {...rest} />;
});

export default Avatar;
