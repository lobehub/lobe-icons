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
      <Path d="M19.763 0l-.373 1.297h2.594L22.354 0h-2.591z" fill={color} />
      <Path d="M16.192 2.27l-.376 1.298h5.52l.37-1.298h-5.514z" fill={color} />
      <Path d="M12.897 4.54l-.377 1.298h8.167l.37-1.297h-8.16z" fill={color} />
      <Path d="M2.85 6.81l-.377 1.298h17.565l.37-1.297H2.85z" fill={color} />
      <Path d="M3.884 9.081l-.376 1.297H19.39l.37-1.297H3.883z" fill={color} />
      <Path d="M4.088 24l.376-1.297H1.866L1.5 24h2.588z" fill={color} />
      <Path d="M7.662 21.73l.376-1.298H2.515L2.15 21.73h5.513z" fill={color} />
      <Path d="M10.957 19.46l.377-1.298h-8.17l-.367 1.297h8.16z" fill={color} />
      <Path d="M21.005 17.19l.376-1.298H3.812l-.366 1.297h17.559z" fill={color} />
      <Path d="M19.967 14.919l.376-1.297H4.461l-.366 1.297h15.872z" fill={color} />
      <Path d="M18.787 12.649l.376-1.298H4.26l-.366 1.298h14.893z" fill={color} />
    </Svg>
  );
});

Icon.displayName = 'UpstageMono';

export default Icon;
