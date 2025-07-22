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
        d="M2 17.152c0-2.697 2.202-4.883 4.889-4.883 2.66 0 4.84 2.165 4.84 4.835s-2.156 4.835-4.816 4.835H2v-4.787zM22 22h-4.913c-2.66 0-4.817-2.165-4.817-4.835s2.18-4.835 4.84-4.835c2.688 0 4.89 2.186 4.89 4.883V22zM22 6.848c0 2.697-2.202 4.883-4.889 4.883-2.66 0-4.84-2.165-4.84-4.835s2.156-4.835 4.816-4.835H22v4.787zM2 2h4.913c2.66 0 4.817 2.165 4.817 4.835S9.55 11.67 6.889 11.67C4.202 11.67 2 9.484 2 6.787V2z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'FloraMono';

export default Icon;
