import React, { memo } from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillId } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M22.012 0h1.032v.927H24v.968h-.956V3.78h-1.032V1.896h-1.878v-.97h1.878V0zM2.6 12.371V1.87h.969v10.502h-.97zm10.423.66h10.95v.918h-6.208v9.579h-4.742V13.03zM5.629 3.333v12.356H0v4.51h10.386V8L20.859 8l-.003-4.668-15.227.001z"
        fill={fill}
        fillRule="evenodd"
      />
      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={id}
          x1="1.646"
          x2="18.342"
          y1="1.916"
          y2="22.091"
        >
          <Stop stopColor="#01A9FF" />
          <Stop offset="1" stopColor="#0160FF" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'StepfunColor';

export default Icon;
