import React, { memo } from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillId } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const { fill, id } = useFillId(TITLE);

  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path d="M12 3.42L4.5 7.97 12 12.47Z" fill={fill} fillOpacity="0.7" />
      <Path d="M12 3.42L19.5 7.97 12 12.47Z" fill={fill} />
      <Path
        d="M12 6.56L14.48 8.95 13.08 8.95 12 7.73 10.83 8.95 9.42 8.95Z"
        fill="#0a0800"
        fillOpacity="0.52"
      />
      <Path
        d="M4.5 13.88L12 16.83 19.5 13.88 19.5 15.61 12 18.56 4.5 15.61Z"
        fill={fill}
        fillOpacity="0.82"
      />
      <Path
        d="M5.3 16.83L12 19.55 18.7 16.83 18.7 18.38 12 20.77 5.3 18.38Z"
        fill={fill}
        fillOpacity="0.62"
      />
      <Defs>
        <LinearGradient id={id} x1="50%" x2="50%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FAD460" />
          <Stop offset="45%" stopColor="#E8A317" />
          <Stop offset="100%" stopColor="#B8751A" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'AskVerdictColor';

export default Icon;
