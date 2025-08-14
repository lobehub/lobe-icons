import React, { memo } from 'react';
import { Defs, Path, RadialGradient, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillId } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        clipRule="evenodd"
        d="M7.082 0c3.91 0 7.081 3.179 7.081 7.1v2.7h2.357c3.91 0 7.082 3.178 7.082 7.1 0 3.923-3.17 7.1-7.082 7.1H0V7.1C0 3.18 3.17 0 7.082 0z"
        fill={fill}
        fillRule="evenodd"
      />
      <Defs>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(-1 22.49999 -30.45394 -1.3535 14 3)"
          gradientUnits="userSpaceOnUse"
          id={id}
          r="1"
        >
          <Stop offset="25%" stopColor="#FE7B02" />
          <Stop offset="43.3%" stopColor="#FE4230" />
          <Stop offset="54.800000000000004%" stopColor="#FE529A" />
          <Stop offset="65.4%" stopColor="#DD67EE" />
          <Stop offset="95%" stopColor="#4B73FF" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'LovableColor';

export default Icon;
