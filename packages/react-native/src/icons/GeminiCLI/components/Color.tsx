import React, { memo } from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillId } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const { fill, id } = useFillId(TITLE);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M0 4.391A4.391 4.391 0 014.391 0h15.217A4.391 4.391 0 0124 4.391v15.217A4.391 4.391 0 0119.608 24H4.391A4.391 4.391 0 010 19.608V4.391z"
        fill={fill}
      />
      <Path
        clipRule="evenodd"
        d="M19.74 1.444a2.816 2.816 0 012.816 2.816v15.48a2.816 2.816 0 01-2.816 2.816H4.26a2.816 2.816 0 01-2.816-2.816V4.26A2.816 2.816 0 014.26 1.444h15.48zM7.236 8.564l7.752 3.728-7.752 3.727v2.802l9.557-4.596v-3.866L7.236 5.763v2.801z"
        fill="#1E1E2E"
        fillRule="evenodd"
      />
      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={id}
          x1="24"
          x2="0"
          y1="6.587"
          y2="16.494"
        >
          <Stop stopColor="#EE4D5D" />
          <Stop offset="32.800000000000004%" stopColor="#B381DD" />
          <Stop offset="47.599999999999994%" stopColor="#207CFE" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'GeminiCLIColor';

export default Icon;
