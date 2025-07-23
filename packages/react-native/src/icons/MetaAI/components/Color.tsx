import React, { memo } from 'react';
import { ClipPath, Defs, G, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillIds } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const [a, , c] = useFillIds(TITLE, 3);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <G clipPath={a.fill}>
        <Path
          clipRule="evenodd"
          d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 3.627a8.373 8.373 0 100 16.746 8.373 8.373 0 000-16.746z"
          fill={c.fill}
          fillRule="evenodd"
        />
      </G>
      <Defs>
        <LinearGradient gradientUnits="userSpaceOnUse" id={c.id} x1="24" x2="0" y1="0" y2="24">
          <Stop offset="13%" stopColor="#FF97E3" />
          <Stop offset="18%" stopColor="#D14FE1" />
          <Stop offset="33.8%" stopColor="#0050E2" />
          <Stop offset="66.6%" stopColor="#0050E2" />
          <Stop offset="80.9%" stopColor="#00DDF4" />
          <Stop offset="85.8%" stopColor="#23F8CC" />
        </LinearGradient>
        <ClipPath id={a.id}>
          <Path d="M0 0h24v24H0z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'MetaAIColor';

export default Icon;
