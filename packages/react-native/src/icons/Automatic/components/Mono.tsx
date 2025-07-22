import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg
      color={color}
      fillRule="evenodd"
      height={size}
      style={style}
      viewBox="0 0 24 24"
      width={size}
      {...rest}
    >
      <Path d="M8.462 3.5h2.924l8.33 17h-1.46L10.617 4.942l-1.442.001z" fill={color} opacity=".8" />
      <Path d="M5.474 20.5l2.817-5.366 2.873 5.366h5.541l-8.362-17L0 20.5z" fill={color} />
      <Path d="M12.768 3.501L21.113 20.5h1.46L14.238 3.504z" fill={color} opacity=".4" />
      <Path d="M14.195 3.501L22.54 20.5H24L15.666 3.504z" fill={color} opacity=".2" />
      <Path d="M11.34 3.501L19.683 20.5h1.464L12.81 3.504z" fill={color} opacity=".6" />
    </Svg>
  );
});

Icon.displayName = 'AutomaticMono';

export default Icon;
