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
      viewBox="0 0 72 24"
      width={size * 3} // 保持宽高比
      {...rest}
    >
      <Path
        clipRule="evenodd"
        d="M46.285 5.191L46.683 2h3.483l-.399 3.191h-3.482zM2 4.952l.346-2.925h15.763l-.346 2.925h-6.406L9.31 22H6.173L8.22 4.952H2zM49.66 22h3.908l6.3-7.687L64.28 22h3.748l-5.955-10.027 8.108-9.946H66.38L60.506 9.42l-4.147-7.393h-3.695l5.609 9.733L49.66 22zm-2.153 0h-3.056l1.834-14.814h3.057L47.507 22zm-19.541-2.925L29.4 7.186h3.057L30.651 22h-6.673c-3.668 0-5.502-1.684-5.502-5.053 0-.408.026-.851.08-1.33l1.036-8.43h3.057l-1.037 8.51c-.035.23-.053.55-.053.957 0 .922.213 1.56.638 1.915.443.355 1.152.532 2.127.532l3.642-.026zm13.488-9.043c.319 0 1.027.018 2.126.053l.479-2.819a27.05 27.05 0 00-2.26-.08c-2.25 0-3.925.506-5.024 1.516-1.08 1.011-1.754 2.642-2.02 4.894L33.718 22h3.057l1.063-8.484c.142-1.241.497-2.127 1.064-2.66.567-.55 1.417-.824 2.552-.824z"
        fill={color}
      />
    </Svg>
  );
});

Icon.displayName = 'TuriXText';

export default Icon;
