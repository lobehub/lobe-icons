'use client';

import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/features/IconAvatar';

import { COLOR_PRIMARY, TITLE } from '../style';
import Color from './Color';

export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ shape = 'circle', background, size, iconStyle, ...rest }) => {
  return (
    <IconAvatar
      Icon={Color}
      aria-label={TITLE}
      background={background || COLOR_PRIMARY}
      color={'#fff'}
      iconMultiple={0.65}
      iconStyle={{
        marginLeft: shape === 'circle' ? size * 0.1 : undefined,
        ...iconStyle,
      }}
      shape={shape}
      size={size}
      {...rest}
    />
  );
});

export default Avatar;
