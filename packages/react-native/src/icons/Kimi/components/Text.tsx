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
      viewBox="0 0 55 24"
      width={size * 2.29} // 保持宽高比
      {...rest}
    >
      <Path
        clipRule="evenodd"
        d="M13.998 2h4.277L15.76 7.645a3.9 3.9 0 01-2.297 2.104h2.1v.01a3.834 3.834 0 013.548 3.83V22h-3.825V11.852a2.99 2.99 0 01-2.713 1.736H5.825V22H2V2.035h3.825v7.714h4.787L13.998 2zM25.93 2h-3.815v20h3.815V2zm23.468 0h3.815v20h-3.815V2zM28.936 22V2h3.855l4.888 7.828L42.557 2h3.836v20h-3.815V9.183l-4.896 7.855-4.93-7.898V22h-3.816z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'KimiText';

export default Icon;
