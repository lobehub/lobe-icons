'use client';

import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/features/IconAvatar';

import { COLOR_PRIMARY, TITLE } from '../style';
import Inner from './Inner';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, ...rest }) => {
  return (
    <IconAvatar
      Icon={Inner}
      aria-label={TITLE}
      background={background || COLOR_PRIMARY}
      color={'#fff'}
      iconMultiple={0.7}
      {...rest}
    />
  );
});

export default Avatar;
