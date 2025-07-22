import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M0 10h4.8v5H0z" fill="#FFFF67" />
      <Path d="M4.8 10h4.8v5H4.8z" fill="#43FFFF" />
      <Path d="M9.6 10h4.8v5H9.6z" fill="#51DA4B" />
      <Path d="M14.4 10h4.8v5h-4.8z" fill="#FF6E3D" />
      <Path d="M19.2 10H24v5h-4.8z" fill="#3C46FF" />
    </Svg>
  );
});

Icon.displayName = 'DalleColor';

export default Icon;
