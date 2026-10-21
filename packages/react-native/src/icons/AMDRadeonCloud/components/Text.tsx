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
      viewBox="0 0 73 24"
      width={size * 3.04} // 保持宽高比
      {...rest}
    >
      <Path
        clipRule="evenodd"
        d="M9.033 2 1 22h5.257l1.486-3.96h8.92l1.64 3.96h5.373L14.784 2zm16.904 0v19.98h4.972V9.512l5.374 6.298h.755l5.374-6.274V22h4.972V2h-4.333l-6.394 7.44L30.267 2zm25.235 0v20h8.261C67.381 22 71 17.782 71 12.032 71 6.548 67.237 2 59.967 2zm4.968 3.67h3.18c4.7 0 6.547 2.866 6.547 6.33 0 2.935-1.494 6.339-6.49 6.339H56.14zm-44.12 1.1 3.178 7.79H9.065z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'AMDRadeonCloudText';

export default Icon;
