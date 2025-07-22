import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M3.428 3.4h3.429v3.428H3.428V3.4zm13.714 0h3.43v3.428h-3.43V3.4z" fill="gold" />
      <Path
        d="M3.428 6.828h6.857v3.429H3.429V6.828zm10.286 0h6.857v3.429h-6.857V6.828z"
        fill="#FFAF00"
      />
      <Path d="M3.428 10.258h17.144v3.428H3.428v-3.428z" fill="#FF8205" />
      <Path
        d="M3.428 13.686h3.429v3.428H3.428v-3.428zm6.858 0h3.429v3.428h-3.429v-3.428zm6.856 0h3.43v3.428h-3.43v-3.428z"
        fill="#FA500F"
      />
      <Path d="M0 17.114h10.286v3.429H0v-3.429zm13.714 0H24v3.429H13.714v-3.429z" fill="#E10500" />
    </Svg>
  );
});

Icon.displayName = 'MistralColor';

export default Icon;
