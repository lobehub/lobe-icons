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
      <Path d="M12 3.42L4.5 7.97 12 12.47Z" fill={color} fillOpacity="0.7" />
      <Path d="M12 3.42L19.5 7.97 12 12.47Z" fill={color} />
      <Path
        d="M12 6.56L14.48 8.95 13.08 8.95 12 7.73 10.83 8.95 9.42 8.95Z"
        fill={color}
        fillOpacity="0.52"
      />
      <Path
        d="M4.5 13.88L12 16.83 19.5 13.88 19.5 15.61 12 18.56 4.5 15.61Z"
        fill={color}
        fillOpacity="0.82"
      />
      <Path
        d="M5.3 16.83L12 19.55 18.7 16.83 18.7 18.38 12 20.77 5.3 18.38Z"
        fill={color}
        fillOpacity="0.62"
      />
    </Svg>
  );
});

Icon.displayName = 'AskVerdictMono';

export default Icon;
