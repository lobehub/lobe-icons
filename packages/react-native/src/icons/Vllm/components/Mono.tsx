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
      <Path d="M0 4.973h9.324V23L0 4.973z" fill={color} />
      <Path d="M13.986 4.351L22.378 0l-6.216 23H9.324l4.662-18.649z" fill={color} />
    </Svg>
  );
});

Icon.displayName = 'VllmMono';

export default Icon;
