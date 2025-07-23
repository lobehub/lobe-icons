import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M0 7.967h2.667v2.667H0zM8 10.633h2.667V13.3H8z" fill="#36CED0" />
      <Path
        d="M0 10.633h2.667V13.3H0zM2.667 13.3h2.666v2.667H8v2.666H2.667V13.3zM2.667 5.3H8v2.667H5.333v2.666H2.667V5.3zM10.667 13.3h2.667v2.667h-2.667z"
        fill="#624AFF"
      />
      <Path d="M24 7.967h-2.667v2.667H24zM16 10.633h-2.667V13.3H16z" fill="#36CED0" />
      <Path
        d="M24 10.633h-2.667V13.3H24zM21.333 13.3h-2.666v2.667H16v2.666h5.333V13.3zM21.333 5.3H16v2.667h2.667v2.666h2.666V5.3z"
        fill="#624AFF"
      />
    </Svg>
  );
});

Icon.displayName = 'ModelScopeColor';

export default Icon;
