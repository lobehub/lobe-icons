'use client';

import { memo, useMemo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/features/IconAvatar';

import {
  AVATAR_BACKGROUND,
  AVATAR_COLOR,
  AVATAR_ICON_MULTIPLE,
  COLOR_GPT_3,
  COLOR_GPT_4,
  COLOR_O_1,
  COLOR_PLATFORM,
  TITLE,
} from '../style';
import Mono from './Mono';

export interface AvatarProps extends Omit<IconAvatarProps, 'Icon'> {
  type?: 'normal' | 'gpt3' | 'gpt4' | 'o1' | 'o3' | 'platform';
}

const Avatar = memo<AvatarProps>(({ type = 'normal', ...rest }) => {
  const background = useMemo(() => {
    switch (type) {
      case 'gpt3': {
        return COLOR_GPT_3;
      }
      case 'gpt4': {
        return COLOR_GPT_4;
      }
      case 'o3':
      case 'o1': {
        return COLOR_O_1;
      }
      case 'platform': {
        return COLOR_PLATFORM;
      }
      default: {
        return AVATAR_BACKGROUND;
      }
    }
  }, [type]);

  return (
    <IconAvatar
      Icon={Mono}
      aria-label={TITLE}
      background={background}
      color={AVATAR_COLOR}
      iconMultiple={AVATAR_ICON_MULTIPLE}
      {...rest}
    />
  );
});

export default Avatar;
