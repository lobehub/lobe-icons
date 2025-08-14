import { memo, useMemo } from 'react';

import { RNIconAvatar, type RNIconAvatarProps } from '@/features';

import {
  AVATAR_BACKGROUND,
  AVATAR_COLOR,
  AVATAR_ICON_MULTIPLE,
  COLOR_GPT_3,
  COLOR_GPT_4,
  COLOR_GPT_5,
  COLOR_OSS,
  COLOR_O_1,
  COLOR_PLATFORM,
  TITLE,
} from '../style';
import Mono from './Mono';

export interface AvatarProps extends Omit<RNIconAvatarProps, 'Icon'> {
  type?: 'normal' | 'gpt3' | 'gpt4' | 'gpt5' | 'o1' | 'o3' | 'oss' | 'platform';
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
      case 'gpt5': {
        return COLOR_GPT_5;
      }
      case 'o3':
      case 'o1': {
        return COLOR_O_1;
      }
      case 'oss': {
        return COLOR_OSS;
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
    <RNIconAvatar
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
