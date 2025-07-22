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
        d="M2 2h20v20H2V2zm1.768 18.237h16.459V3.761H3.768v16.476zm3.515-14.91l3.479 6.176-3.871 7.154h2.493l2.58-4.883 2.747 4.883h2.54L9.82 5.324l-2.538.002z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'LambdaMono';

export default Icon;
