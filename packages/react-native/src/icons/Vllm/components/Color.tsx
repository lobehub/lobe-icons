import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M0 4.973h9.324V23L0 4.973z" fill="#FDB515" />
      <Path d="M13.986 4.351L22.378 0l-6.216 23H9.324l4.662-18.649z" fill="#30A2FF" />
    </Svg>
  );
});

Icon.displayName = 'VllmColor';

export default Icon;
