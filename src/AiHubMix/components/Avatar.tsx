'use client';

import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/features/IconAvatar';

import { COLOR_GRADIENT, TITLE } from '../style';
import Mono from './Mono';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>((props) => {
  const { ...rest } = props;
  return (
    <IconAvatar
      Icon={Mono}
      aria-label={TITLE}
      background={COLOR_GRADIENT}
      color={'#fff'}
      {...rest}
    />
  );
});

export default Avatar;
