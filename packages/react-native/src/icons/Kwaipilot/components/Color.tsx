import React, { memo } from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillIds } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const [a, b] = useFillIds(TITLE, 2);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M11.765.03C5.327.03.108 5.25.108 11.686c0 3.514 1.556 6.665 4.015 8.804L9.89 8.665h6.451L9.31 23.083c.807.173 1.63.26 2.455.26 6.438 0 11.657-5.22 11.657-11.658S18.202.028 11.765.028V.03z"
        fill={a.fill}
      />
      <Path
        d="M4.123 20.489l6.362-13.046c.017-.036.035-.073.055-.11l.086-.18h.005a6.697 6.697 0 015.913-3.551c2.784 0 5.171 1.7 6.184 4.116-1.622-4.485-5.92-7.69-10.963-7.69C5.327.028.108 5.247.108 11.685c0 3.514 1.556 6.666 4.015 8.804z"
        fill={b.fill}
      />

      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="13.469"
          x2="12.557"
          y1="4.823"
          y2="21.302"
        >
          <Stop offset="31.3%" stopColor="#9EC0E0" />
          <Stop offset="100%" stopColor="#fff" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="13.739"
          x2="5.647"
          y1="4.229"
          y2="17.386"
        >
          <Stop stopColor="#fff" />
          <Stop offset="100%" stopColor="#BCD5EC" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'KwaipilotColor';

export default Icon;
