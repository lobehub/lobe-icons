import React, { memo } from 'react';
import { Svg, Text } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Svg
      color={color}
      height={size}
      style={style}
      viewBox="0 0 74 24"
      width={size * 3.08}
      {...rest}
    >
      <Text
        fill={color}
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="22"
        fontWeight="700"
        x="0"
        y="18.5"
      >
        AiOnly
      </Text>
    </Svg>
  );
});

Icon.displayName = 'AiOnlyText';

export default Icon;
