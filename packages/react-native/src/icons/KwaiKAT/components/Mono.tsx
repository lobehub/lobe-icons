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
        d="M20.42 19.311h3.418V1l-6.781 4.177-6.778-4.111.026 7.868h3.418l-.026-2.222 3.42 2.035 3.303-2.035v12.6z"
        fill={color}
      />
      <Path
        d="M3.064 10.734c2.784-2.07 6.942-2.394 9.941.907l.01.01.01.013 9.16 12.24h-3.84l-7.69-10.217c-1.63-1.737-3.891-1.689-5.515-.638-1.624 1.05-2.563 3.073-1.548 5.28 1.494 3.246 6.152 3.275 7.725.108l.032-.064 2.02 2.629c-2.98 3.968-9.329 3.926-12.165-.552-2.395-3.78-.926-7.645 1.86-9.716z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'KwaiKATMono';

export default Icon;
