import React, { memo } from 'react';
import { ClipPath, Defs, G, Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <G clipPath="url(#a)">
        <Path
          clipRule="evenodd"
          d="m.197 0 6.538 6.539h10.719v10.717L24 23.795V0zm6.53 7.85L0 14.57V24h9.419l6.726-6.736H6.727z"
          fill="#ed1c24"

          fillRule="evenodd"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path d="M0 0h24v24H0z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'AMDRadeonCloudColor';

export default Icon;
