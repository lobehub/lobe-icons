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
        d="M9.553 9.378H4.777V4.835H8.62c.513 0 .932-.42.932-.932V.058h4.544v4.777a4.542 4.542 0 01-4.544 4.543zm-4.776.467H0v4.543h3.845c.512 0 .932.42.932.932v3.845H9.32v-4.777a4.542 4.542 0 00-4.543-4.543zM20.05 9.61a.935.935 0 01-.932-.932V4.835h-4.543V9.61a4.542 4.542 0 004.543 4.544h4.777V9.612H20.05zM9.787 19.166v4.777h4.544v-3.845c0-.513.42-.932.932-.932h3.845V14.62H14.33a4.542 4.542 0 00-4.544 4.544z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'Ai2Mono';

export default Icon;
