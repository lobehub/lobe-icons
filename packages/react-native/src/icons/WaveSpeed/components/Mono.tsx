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
        d="m8.038 11.729 2.58-4.469a2.4 2.4 0 0 1 2.074-1.197h2.586c.409 0 .741.332.741.741v4.925l2.58-4.469a2.4 2.4 0 0 1 2.074-1.197h2.586c.409 0 .741.332.741.741v4.219a.74.74 0 0 1-.741.741h-.677l-3.038 5.26a1.823 1.823 0 0 1-2.491.668l-2.217-1.279a1.83 1.83 0 0 1-.912-1.58v-1.897l-2.36 4.088a1.824 1.824 0 0 1-2.492.668l-2.217-1.279a1.83 1.83 0 0 1-.912-1.58v-1.897l-.907 1.571a.74.74 0 0 1-1.012.271L.371 12.669a.74.74 0 0 1-.272-1.013L2.637 7.26a2.4 2.4 0 0 1 2.074-1.197h2.586c.409 0 .741.332.741.741z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'WaveSpeedMono';

export default Icon;
