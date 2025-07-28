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
        clipRule="evenodd"
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zm0-3.563c5.385 0 9.75-3.777 9.75-8.437 0-4.66-4.365-8.438-9.75-8.438S2.25 7.34 2.25 12s4.365 8.438 9.75 8.438z"
        fill={color}
      />
      <Path
        d="M16.207 10.195a.96.96 0 111.357 1.357l-1.114 1.114 1.473.85a.96.96 0 11-.96 1.662l-2.444-1.411a1.003 1.003 0 01-.072-.046.962.962 0 01-.236-1.53l1.996-1.996zM7.688 9.937a1.5 1.5 0 00-1.5 1.5v2.25a1.5 1.5 0 003 0v-2.25a1.5 1.5 0 00-1.5-1.5z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'MonicaMono';

export default Icon;
