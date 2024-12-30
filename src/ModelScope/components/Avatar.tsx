'use client';

import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/features/IconAvatar';

import { TITLE } from '../style';
import Color from './Color';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, ...rest }) => {
  return (
    <IconAvatar
      Icon={Color}
      aria-label={TITLE}
      background={background}
      color={'#000'}
      iconMultiple={0.7}
      {...rest}
    />
  );
});

export default Avatar;
