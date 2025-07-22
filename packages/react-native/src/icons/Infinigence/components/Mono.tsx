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
      <Path d="M14.186 19.885V4.226H5v4.137h4.226v11.522H5V24h13.412v-4.115h-4.226z" fill={color} />
      <Path d="M18.412 0h-4.226v4.226h4.226V0z" fill={color} />
    </Svg>
  );
});

Icon.displayName = 'InfinigenceMono';

export default Icon;
