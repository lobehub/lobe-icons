import { memo } from 'react';

import IconAvatar, { type IconAvatarProps } from '@/features/IconAvatar';

import { COLOR_GPT_3, COLOR_GPT_4, COLOR_O_1, COLOR_PRIMARY, TITLE } from '../style';
import Mono from './Mono';

export interface AvatarProps extends Omit<IconAvatarProps, 'Icon'> {
  type?: 'normal' | 'gpt3' | 'gpt4' | 'o1';
}

const Avatar = memo<AvatarProps>(({ background, type = 'normal', ...rest }) => {
  let bg: string;

  switch (type) {
    case 'gpt3': {
      bg = COLOR_GPT_3;
      break;
    }
    case 'gpt4': {
      bg = COLOR_GPT_4;
      break;
    }
    case 'o1': {
      bg = COLOR_O_1;
      break;
    }
    default: {
      bg = background || COLOR_PRIMARY;
    }
  }

  return <IconAvatar Icon={Mono} aria-label={TITLE} background={bg} {...rest} />;
});

export default Avatar;
