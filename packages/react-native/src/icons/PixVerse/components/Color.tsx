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
        d="M10.998 23.837L5 21.015V5.569c0-.733.32-1.547.84-2.065l1.386-1.387 6.064 19.729c.426 1.377-.987 2.605-2.292 1.991z"
        fill={a.fill}
      />
      <Path
        d="M19.36 8.43L12.517.905A2.765 2.765 0 008.517.81L5.84 3.504c-.511.584-.803 1.198-.803 1.93V20.88l13.699-8.219a2.765 2.765 0 00.623-4.23"
        fill={b.fill}
      />
      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="-5.894"
          x2="13.185"
          y1="5.53"
          y2="23.781"
        >
          <Stop stopColor="#FE9E58" />
          <Stop offset="39.6%" stopColor="#E470EC" />
          <Stop offset="100%" stopColor="#442FBA" />
        </LinearGradient>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="15.931"
          x2="-3.149"
          y1="5.396"
          y2="23.647"
        >
          <Stop stopColor="#FFA052" />
          <Stop offset="39.6%" stopColor="#E36CFA" stopOpacity=".8" />
          <Stop offset="100%" stopColor="#442FBA" stopOpacity=".7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'PixVerseColor';

export default Icon;
