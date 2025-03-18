'use client';

import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/features/IconAvatar';

import { COLOR_PRIMARY, TITLE } from '../style';
import Inner from './Inner';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, size, ...rest }) => {
  return (
    <IconAvatar
      Icon={Inner}
      aria-label={TITLE}
      background={background || COLOR_PRIMARY}
      color={'#000'}
      iconMultiple={0.65}
      size={size}
      {...rest}
    />
  );
});

export default Avatar;
