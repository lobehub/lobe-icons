import React, { memo } from 'react';

import { RNIconAvatar, type RNIconAvatarProps } from '@/features';

import { AVATAR_BACKGROUND, AVATAR_COLOR, AVATAR_ICON_MULTIPLE, TITLE } from '../style';
import Mono from './Mono';

export type AvatarProps = Omit<RNIconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, ...rest }) => {
  return (
    <RNIconAvatar
      Icon={Mono}
      aria-label={TITLE}
      background={background || AVATAR_BACKGROUND}
      color={AVATAR_COLOR}
      iconMultiple={AVATAR_ICON_MULTIPLE}
      {...rest}
    />
  );
});
export default Avatar;
