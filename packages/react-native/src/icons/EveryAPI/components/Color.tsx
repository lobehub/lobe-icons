import React, { memo } from 'react';
import { ClipPath, Defs, G, Path, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillId } from '@/hooks/useFillId';

import { TITLE } from '../style';

const MARK =
  'M20.016 4.248a2.265 2.265 0 0 1 1.038 1.888l.012 1.558a2.267 2.267 0 0 1-1.065 1.937L9.504 16.197a.504.504 0 0 1-.771-.428l.005-2.283a2.772 2.772 0 0 1 1.275-2.325l6.644-4.259a.302.302 0 0 0-.008-.513l-2.571-1.542a.704.704 0 0 0-.74.01L6.677 9.083A3.015 3.015 0 0 0 5.6 10.271l-.23.455a3.532 3.532 0 0 0-.373 1.798l.048.805c.034.566.226 1.11.555 1.571l.272.383c.18.252.409.466.673.628l4.977 3.063c.293.18.662.179.954-.003l4.324-2.687a1.307 1.307 0 0 1 1.381 0l2.585 1.606a.503.503 0 0 1-.004.857l-7.299 4.457a2.518 2.518 0 0 1-2.612.007l-7.203-4.344a2.265 2.265 0 0 1-1.095-1.937l-.011-8.755A2.264 2.264 0 0 1 3.59 6.261L12.061.866a2.517 2.517 0 0 1 2.715.007Z';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const clip = useFillId(TITLE);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <G clipPath={clip.fill}>
        <Path d={MARK} fill="#9060F9" />
        <Path
          d="m5.06 15.471 6.938 4.268 6.203-3.85 4.167 2.349-10.248 6.258-7.162-4.415.019-5.035Z"
          fill="#5534F9"
        />
        <Path d="M21.675 9.057 8.327 17.41l.01-4.525.773-1.629 7.553-4.831Z" fill="#6F41F9" />
        <Path d="m20.489 4.08.96.93.018 2.655-.389 1.751-7.833-4.541 4.261-2.73Z" fill="#A154FA" />
      </G>

      <Defs>
        <ClipPath id={clip.id}>
          <Path d={MARK} />
        </ClipPath>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'EveryAPIColor';

export default Icon;
