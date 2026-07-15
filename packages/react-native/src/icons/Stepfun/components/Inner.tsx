import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg
      color={color}
      fillRule="evenodd"
      height={size}
      style={style}
      viewBox="0 0 24 24"
      width={size}
      {...rest}
    >
      <Path
        d="M1 23h6.335v-6.337H1V23zM8.832 23h6.336v-6.337H8.832V23zM8.832 15.17h6.336V8.835H8.832v6.337zM8.832 7.342h6.336V1.005H8.832v6.337zM16.665 7.337H23V1h-6.335v6.337z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'StepfunInner';

export default Icon;
