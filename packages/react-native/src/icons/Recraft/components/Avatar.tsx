import React, { memo } from 'react';

import { RNIconAvatar, type RNIconAvatarProps } from '@/features';

import {
  AVATAR_BACKGROUND,
  AVATAR_COLOR,
  AVATAR_ICON_MULTIPLE,
  AVATAR_ICON_MULTIPLE_SQUARE,
  TITLE,
} from '../style';
import Mono from './Mono';

export type AvatarProps = Omit<RNIconAvatarProps, 'Icon'>;

// Size and placement follow the Recraft brand guidelines: in a circle the icon is
// moved slightly up and right for optical balance, in a square it follows the
// app icon tile.
const Avatar = memo<AvatarProps>(({ background, shape = 'circle', ...rest }) => {
  const isSquare = shape === 'square';
  return (
    <RNIconAvatar
      Icon={Mono}
      aria-label={TITLE}
      background={background || AVATAR_BACKGROUND}
      color={AVATAR_COLOR}
      iconMultiple={isSquare ? AVATAR_ICON_MULTIPLE_SQUARE : AVATAR_ICON_MULTIPLE}
      shape={shape}
      iconStyle={
        isSquare
          ? { marginLeft: rest.size * 0.022, marginTop: -rest.size * 0.05 }
          : { marginLeft: rest.size * 0.016, marginTop: -rest.size * 0.042 }
      }
      {...rest}
    />
  );
});
export default Avatar;
