import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M13.433 1.756a8.316 8.316 0 00-10.69.392 8.335 8.335 0 00-.598 11.765 8.317 8.317 0 0010.596 1.476L6.278 8.226l7.155-6.47z"
        fill="#4D5EFF"
      />
      <Path
        d="M10.568 21.742a8.316 8.316 0 0010.688-.392 8.336 8.336 0 00.598-11.765 8.317 8.317 0 00-10.596-1.476l6.463 7.163-7.155 6.47h.002z"
        fill="#00FFCE"
      />
    </Svg>
  );
});

Icon.displayName = 'SkyworkColor';

export default Icon;
