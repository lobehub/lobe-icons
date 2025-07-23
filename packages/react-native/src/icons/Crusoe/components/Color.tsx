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
        d="M12 0L4.583 6.583c-3.23 2.869-3.23 7.965 0 10.834L12 24l7.417-6.583c3.23-2.869 3.23-7.965 0-10.834L12 0z"
        fill={fill}
      />
      <Defs>
        <LinearGradient
          gradientUnits="userSpaceOnUse"
          id={id}
          x1="18.919"
          x2="4.853"
          y1="5.595"
          y2="18.301"
        >
          <Stop stopColor="#F4BF45" />
          <Stop offset="35%" stopColor="#E48047" />
          <Stop offset="69%" stopColor="#C73361" />
          <Stop offset="100%" stopColor="#A42F5F" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'CrusoeColor';

export default Icon;
