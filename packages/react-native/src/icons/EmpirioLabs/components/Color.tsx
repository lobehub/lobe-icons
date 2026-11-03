import React, { memo } from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillId } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);
  return (
    <Svg fillRule="evenodd" height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M11.61 0.0L1.65 6.26L1.65 17.79L12.05 24.0L21.56 18.18L19.74 16.8L12.37 21.39L12.32 15.25L10.52 16.21L10.5 20.77L4.63 17.17L22.35 6.36ZM3.57 7.42L10.23 11.53L3.6 15.57ZM11.68 2.51L18.31 6.63L12.1 10.37L5.47 6.51Z"
        fill={fill}
      />
      <Defs>
        <LinearGradient id={id} x1="50%" x2="60%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#7AD7F2" />
          <Stop offset="48%" stopColor="#1186F5" />
          <Stop offset="100%" stopColor="#0A2E8C" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'EmpirioLabsColor';

export default Icon;
