'use client';

import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/features/IconAvatar';

import { AVATAR_BACKGROUND, AVATAR_ICON_MULTIPLE, TITLE } from '../style';
import Inner from './Inner';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ ...rest }) => {
  return (
    <IconAvatar
      Icon={Inner}
      aria-label={TITLE}
      background={AVATAR_BACKGROUND}
      iconMultiple={AVATAR_ICON_MULTIPLE}
      {...rest}
    />
  );
});

export default Avatar;
