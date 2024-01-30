import { Avatar as A, type AvatarProps } from '@lobehub/ui';
import { readableColor } from 'polished';
import { memo } from 'react';

import { COLOR_PRIMARY } from '../style';
import Mono from './Mono';

const Avatar = memo<AvatarProps>(({ size = 64, style, ...rest }) => {
  return (
    <A
      avatar={<Mono size={size * 0.75} />}
      background={COLOR_PRIMARY}
      size={size}
      style={{ color: readableColor(COLOR_PRIMARY), ...style }}
      {...rest}
    />
  );
});

export default Avatar;
