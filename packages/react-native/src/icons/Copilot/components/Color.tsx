import React, { memo } from 'react';
import { Defs, LinearGradient, Path, RadialGradient, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillIds } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const [b, c, d, e] = useFillIds(TITLE, 4);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M16.295 5.29l-0.242 0.986h-2.32c-1.721 0-3.22 1.197-3.638 2.902l-2.101 8.593H3.798c-2.44 0-4.229-2.342-3.637-4.761l2.106-8.612c0.557-2.274 2.556-3.87 4.85-3.87h5.54c2.44 0 4.23 2.343 3.638 4.761"
        fill={b.fill}
      />
      <Path
        d="M16.295 5.29l-0.242 0.986h-2.32c-1.721 0-3.22 1.197-3.638 2.902l-2.101 8.593H3.798c-2.44 0-4.229-2.342-3.637-4.761l2.106-8.612c0.557-2.274 2.556-3.87 4.85-3.87h5.54c2.44 0 4.23 2.343 3.638 4.761"
        fill={c.fill}
      />
      <Path
        d="M7.752 18.758l0.242-0.986h2.321c1.72 0 3.22-1.197 3.637-2.903l2.102-8.593h4.196c2.439 0 4.228 2.343 3.637 4.762l-2.107 8.611c-0.556 2.274-2.555 3.87-4.85 3.87h-5.54c-2.44 0-4.229-2.342-3.638-4.761"
        fill={d.fill}
      />
      <Path
        d="M7.752 18.758l0.242-0.986h2.321c1.72 0 3.22-1.197 3.637-2.903l2.102-8.593h4.196c2.439 0 4.228 2.343 3.637 4.762l-2.107 8.611c-0.556 2.274-2.555 3.87-4.85 3.87h-5.54c-2.44 0-4.229-2.342-3.638-4.761"
        fill={e.fill}
      />
      <Defs>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(-9.77133 19.8405 38.9403 15.7727 12.674 0.587)"
          gradientUnits="userSpaceOnUse"
          id={b.id}
          r="1"
        >
          <Stop offset="25%" stopColor="#109df2" />
          <Stop offset="72%" stopColor="#aad445" />
          <Stop offset="97%" stopColor="#ffd400" />
        </RadialGradient>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(-9.94414 20.7959 24.6537 12.5336 21.948 4.756)"
          gradientUnits="userSpaceOnUse"
          id={d.id}
          r="1"
        >
          <Stop offset="7.000000000000001%" stopColor="#8c48ff" />
          <Stop offset="5%" stopColor="#f2598a" />
          <Stop offset="9%" stopColor="#ffb152" />
        </RadialGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="8.275"
          x2="8.177"
          y1="0.534"
          y2="17.776"
        >
          <Stop stopColor="#3dcbff" />
          <Stop offset="25%" stopColor="#0588f7" stopOpacity="0" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={e.id}
          x1="15.839"
          x2="15.829"
          y1="5.211"
          y2="9.907"
        >
          <Stop offset="6%" stopColor="#f8adfa" />
          <Stop offset="71%" stopColor="#a86edd" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'CopilotColor';

export default Icon;
