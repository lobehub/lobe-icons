import React, { memo } from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillId } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Defs>
        <LinearGradient id={id} x1="17.764%" x2="100%" y1="8.678%" y2="91.322%">
          <Stop offset="0%" stopColor="#FEC13E" />
          <Stop offset="100%" stopColor="#FF6933" />
        </LinearGradient>
      </Defs>
      <Path
        d="M7.333 2h-3.2l-2 4.333V17.8L0 22h5.2l2.028-4.2L7.333 2zm7.334 0h-5.2v20h5.2V2zM16.8 7.733H22V22h-5.2V7.733zM22 2h-5.2v4.133H22V2z"
        fill={fill}
        fillRule="nonzero"
      />
    </Svg>
  );
});

Icon.displayName = 'BaichuanColor';

export default Icon;
