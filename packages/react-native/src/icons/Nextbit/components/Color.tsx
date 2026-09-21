import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M14.207 4H9.793c0 5.282-4.393 9.58-9.793 9.58v4.316a14.33 14.33 0 0 0 9.794-3.839V21h4.413c0-5.282 4.393-9.58 9.793-9.58V7.105a14.32 14.32 0 0 0-9.793 3.841z"
        fill="#04d98b"
      />
    </Svg>
  );
});

Icon.displayName = 'NextbitColor';

export default Icon;
