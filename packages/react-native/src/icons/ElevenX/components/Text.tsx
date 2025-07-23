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
      viewBox="0 0 41 24"
      width={size * 1.71} // 保持宽高比
      {...rest}
    >
      <Path
        d="M23.038 22l5.788-7.412-5.788-7.504h4.44l3.645 4.778 3.461-4.778h4.41l-5.757 7.504L38.995 22h-4.41l-3.707-4.778-3.4 4.778h-4.44zM16.96 2h2.726v20h-3.614V6.319a9.634 9.634 0 01-1.593.566c-.52.133-1.041.2-1.562.2V3.622a8.094 8.094 0 002.021-.474c.654-.256 1.328-.639 2.022-1.149zM6.043 2h2.726v20H5.155V6.319a9.637 9.637 0 01-1.593.566c-.52.133-1.041.2-1.562.2V3.622a8.094 8.094 0 002.021-.474C4.675 2.893 5.35 2.51 6.043 2z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'ElevenXText';

export default Icon;
