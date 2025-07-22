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
      viewBox="0 0 65 24"
      width={size * 2.71} // 保持宽高比
      {...rest}
    >
      <Path
        clipRule="evenodd"
        d="M34.97 7.668h6.416V4.854H34.97V2h-2.888v2.854H27.64l.37-2.114h-3.019l-1.54 8.81h1.225a2.362 2.362 0 002.131-1.934l.328-1.964h4.918v8.627h-8.616v2.884h8.616V22h2.888v-2.837h7.146v-2.884h-7.146l.03-8.61zM4.87 2.033H7.76l.013 2.818h12.884v2.91H7.747v10.596h9.304V14.85h2.898v4.582A1.992 1.992 0 0118.05 21.3H6.704a1.992 1.992 0 01-1.835-1.813V7.75H2V4.84h2.869V2.034zm40.88.67h16.46v2.815H45.75V2.704zM63 9.106v2.884H51.437l-2.56 6.427h10.7l-1.295-3.564h3.187l1.311 3.584c.103.34.161.692.174 1.047 0 .887-.869 1.745-1.836 1.817H45.71v-2.884h.043l2.56-6.427h-3.311V9.105H63z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'QiniuText';

export default Icon;
