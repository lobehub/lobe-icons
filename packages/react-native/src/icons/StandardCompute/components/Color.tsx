import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M6.375 2.156h11.25v19.688H6.375z" fill="#E2C07F" />
    </Svg>
  );
});

Icon.displayName = 'StandardComputeColor';

export default Icon;
