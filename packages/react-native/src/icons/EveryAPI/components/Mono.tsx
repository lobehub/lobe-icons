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
        d="M20.016 4.248a2.265 2.265 0 0 1 1.038 1.888l.012 1.558a2.267 2.267 0 0 1-1.065 1.937L9.504 16.197a.504.504 0 0 1-.771-.428l.005-2.283a2.772 2.772 0 0 1 1.275-2.325l6.644-4.259a.302.302 0 0 0-.008-.513l-2.571-1.542a.704.704 0 0 0-.74.01L6.677 9.083A3.015 3.015 0 0 0 5.6 10.271l-.23.455a3.532 3.532 0 0 0-.373 1.798l.048.805c.034.566.226 1.11.555 1.571l.272.383c.18.252.409.466.673.628l4.977 3.063c.293.18.662.179.954-.003l4.324-2.687a1.307 1.307 0 0 1 1.381 0l2.585 1.606a.503.503 0 0 1-.004.857l-7.299 4.457a2.518 2.518 0 0 1-2.612.007l-7.203-4.344a2.265 2.265 0 0 1-1.095-1.937l-.011-8.755A2.264 2.264 0 0 1 3.59 6.261L12.061.866a2.517 2.517 0 0 1 2.715.007Z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'EveryAPIMono';

export default Icon;
