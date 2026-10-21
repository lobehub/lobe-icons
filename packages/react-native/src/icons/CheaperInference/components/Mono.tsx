import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg color={color} height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M21.941 0L15.084 5.357 16.403 0H21.941Z" fill={color} />
      <Path
        d="M10.073 20.59C9.58 22.592 7.784 24 5.722 24 2.813 24 0.675 21.272 1.37 18.447L4.873 4.215C5.482 1.74 7.702 0 10.251 0H15.141L10.073 20.59ZM11.449 1.477C10.939 1.477 10.526 1.89 10.526 2.4 10.526 2.91 10.939 3.323 11.449 3.323 11.959 3.323 12.372 2.91 12.372 2.4 12.372 1.89 11.959 1.477 11.449 1.477Z"
        fill={color}
      />
      <Path
        d="M10.553 23.899L14.835 6.46 21.791 18.077C23.325 20.641 21.479 23.899 18.491 23.899H10.553Z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'CheaperInferenceMono';

export default Icon;
