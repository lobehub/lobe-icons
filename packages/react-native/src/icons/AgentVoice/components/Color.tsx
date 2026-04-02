import React, { memo } from 'react';
import { Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        d="M23.696 12.056h-8.825a.283.283 0 01-.246-.425l4.413-7.643a.283.283 0 00-.246-.425l-9.018.005a.567.567 0 00-.49.283L.037 19.863a.283.283 0 00.246.425h9.015c.203 0 .39-.108.491-.284l4.325-7.49a.283.283 0 01.49 0l4.413 7.644c.11.188.382.188.491 0l4.433-7.677a.283.283 0 00-.246-.425z"
        fill="#0F6FFF"
      />
    </Svg>
  );
});

Icon.displayName = 'AgentVoiceColor';

export default Icon;
