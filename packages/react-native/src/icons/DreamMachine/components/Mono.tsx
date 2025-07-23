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
      <Path d="M12.393 24L2 17.998l10.393-6 10.392 6-10.393 6z" fill={color} fillOpacity=".66" />
      <Path d="M2 5.999L12.393 0v24L2 18V5.999z" fill={color} fillOpacity=".66" />
    </Svg>
  );
});

Icon.displayName = 'DreamMachineMono';

export default Icon;
