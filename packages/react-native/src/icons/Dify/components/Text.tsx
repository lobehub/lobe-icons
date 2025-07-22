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
      viewBox="0 0 53 24"
      width={size * 2.21} // 保持宽高比
      {...rest}
    >
      <Path
        d="M23.834 5.851c1.403 0 1.924-.86 1.924-1.925S25.24 2 23.834 2c-1.405 0-1.923.861-1.923 1.926 0 1.064.518 1.925 1.923 1.925z"
        fill={color}
      />
      <Path
        d="M7.837 2.002H2v17.874h5.837c7.209 0 9.269-4.124 9.269-8.938 0-4.814-2.06-8.936-9.27-8.936zm.069 15.125h-2.61V4.752h2.61c4.146 0 5.906 2.037 5.906 6.186s-1.76 6.186-5.906 6.186v.003z"
        fill={color}
      />
      <Path
        d="M30.563 6.265v1.239h-3.157v2.75h3.157v6.875h-5.22V7.501H18.48v2.75h3.844v6.876H17.79v2.749h20.597v-2.75h-4.805v-6.875h4.805V7.5h-4.805v-2.75h4.805V2.003h-3.571a4.266 4.266 0 00-4.258 4.263h.005z"
        fill={color}
      />
      <Path
        d="M48.177 7.501L45.43 16.44l-2.746-8.938h-3.262l3.983 11.561c.414 1.203-.288 2.189-1.56 2.189h-1.394V24h2.052c1.79 0 3.4-1.134 4.005-2.819l4.93-13.68h-3.262z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'DifyText';

export default Icon;
