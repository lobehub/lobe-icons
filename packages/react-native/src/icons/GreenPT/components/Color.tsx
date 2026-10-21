import React, { memo } from 'react';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillId } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const { fill, id } = useFillId(TITLE);

  return (
    <Svg height={size} style={style} viewBox="0 0 86 86" width={size} {...rest}>
      <Path
        d="M43 0C19.252 0 0 19.252 0 43s19.252 43 43 43 43-19.252 43-43S66.748 0 43 0Zm1.362 66.507c-12.864 0-23.292-10.493-23.292-23.435 0-12.943 10.428-23.435 23.292-23.435 12.863 0 23.291 10.492 23.291 23.435 0 12.942-10.428 23.435-23.291 23.435Z"
        fill="#9BE755"
      />
      <Path
        d="M56.604 78.833C37.066 78.833 21.226 62.79 21.226 43S37.066 7.167 56.604 7.167c4.368 0 8.533.84 12.396 2.306C61.728 3.558 52.506 0 42.453 0 19.007 0 0 19.252 0 43s19.007 43 42.453 43C52.506 86 61.728 82.442 69 76.527c-3.863 1.466-8.028 2.306-12.396 2.306Z"
        fill="#9BE755"
      />
      <Path
        d="M56.604 78.833C37.066 78.833 21.226 62.79 21.226 43S37.066 7.167 56.604 7.167c4.368 0 8.533.84 12.396 2.306C61.728 3.558 52.506 0 42.453 0 19.007 0 0 19.252 0 43s19.007 43 42.453 43C52.506 86 61.728 82.442 69 76.527c-3.863 1.466-8.028 2.306-12.396 2.306Z"
        fill={fill}
      />
      <Defs>
        <LinearGradient gradientUnits="userSpaceOnUse" id={id} x1="40" x2="56" y1="12" y2="76">
          <Stop stopColor="#FFFFFF" stopOpacity=".1" />
          <Stop offset="100%" stopColor="#000000" stopOpacity=".3" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'GreenPTColor';

export default Icon;
