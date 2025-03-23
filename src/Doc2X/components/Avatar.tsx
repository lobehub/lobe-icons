'use client';

import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/features/IconAvatar';

import { COLOR_PRIMARY, TITLE } from '../style';
import Color from './Color';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, size, ...rest }) => {
  return (
    <IconAvatar
      Icon={Color}
      aria-label={TITLE}
      background={background || COLOR_PRIMARY}
      color={'#fff'}
      size={size}
      {...rest}
    />
  );
});

export default Avatar;
