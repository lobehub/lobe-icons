'use client';

import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/features/IconAvatar';

import { AVATAR_BACKGROUND, AVATAR_COLOR, AVATAR_ICON_MULTIPLE, TITLE } from '../style';
import Mono from './Mono';

/**
 * WinWin 头像组件
 * 使用 Mono 组件以支持通过 currentColor 适配头像颜色
 */
export type AvatarProps = Omit<IconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ ...rest }) => {
  return (
    <IconAvatar
      Icon={Mono}
      aria-label={TITLE}
      background={AVATAR_BACKGROUND}
      color={AVATAR_COLOR}
      iconMultiple={AVATAR_ICON_MULTIPLE}
      {...rest}
    />
  );
});

export default Avatar;
