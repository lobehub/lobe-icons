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
      viewBox="0 0 52 24"
      width={size * 2.17} // 保持宽高比
      {...rest}
    >
      <Path
        d="M4.8 2H2v20h12.4v-2.4H4.8V2zM20 2h-2.8v20h12.4v-2.4H20V2zM32 22V2h3.6L41 13.435 46.4 2H50v20h-2.8V5.388l-5.4 10.989h-1.6L34.8 5.387V22H32z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'VllmText';

export default Icon;
