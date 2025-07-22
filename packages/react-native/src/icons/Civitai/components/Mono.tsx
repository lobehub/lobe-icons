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
      <Path
        d="M22.392 6L12 0 1.608 6v12L12 24l10.392-6V6zm-3.407 1.967L12 3.934 5.015 7.967v8.066L12 20.065l6.985-4.032V7.967z"
        fill={color}
      />
      <Path
        d="M12 6.885l4.43 2.558v1.377h-2.386L12 9.64l-2.044 1.18v2.36L12 14.36l2.044-1.18h2.386v1.377L12 17.115l-4.43-2.558V9.443L12 6.885z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'CivitaiMono';

export default Icon;
