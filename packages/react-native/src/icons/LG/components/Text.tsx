import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg
      color={color}
      fillRule="nonzero"
      height={size}
      style={style}
      viewBox="0 0 65 24"
      width={size * 2.71} // 保持宽高比
      {...rest}
    >
      <Path
        d="M6.422 17.93h9.17v3.783H2V2.287h4.422V17.93zm18.9-3.623h3.6v3.398c-.661.256-1.957.512-3.188.512-3.982 0-5.308-2.05-5.308-6.217 0-3.976 1.262-6.317 5.241-6.317 2.218 0 3.477.706 4.52 2.054l2.754-2.569C31.26 2.737 28.325 2 25.57 2c-6.192 0-9.444 3.427-9.444 9.966C16.125 18.473 19.06 22 25.54 22c2.972 0 5.878-.768 7.459-1.891v-9.426h-7.68l.002 3.624zM39 22l6.437-20h4.753l6.437 20H52.39l-2.852-10.418a102.698 102.698 0 01-.896-3.24 72.439 72.439 0 00-.869-3.292h-.109a88.125 88.125 0 01-.842 3.293c-.29 1.115-.58 2.195-.869 3.239L43.074 22H39zm3.993-5.128v-3.104h9.56v3.104h-9.56zM58.98 22V2H63v20h-4.02z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'LGText';

export default Icon;
