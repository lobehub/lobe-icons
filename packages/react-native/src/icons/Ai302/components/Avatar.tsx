import React, { memo } from 'react';

import { RNIconAvatar, type RNIconAvatarProps } from '@/features';

import { AVATAR_BACKGROUND, AVATAR_ICON_MULTIPLE, TITLE } from '../style';
import Inner from './Inner';

export type AvatarProps = Omit<RNIconAvatarProps, 'Icon'>;

const Avatar = memo<AvatarProps>(({ background, ...rest }) => {
  return (
    <RNIconAvatar
      Icon={Inner}
      aria-label={TITLE}
      background={background || AVATAR_BACKGROUND}
      iconMultiple={AVATAR_ICON_MULTIPLE}
      {...rest}
    />
  );
});
export default Avatar;
