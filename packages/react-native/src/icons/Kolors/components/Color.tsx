import React, { memo } from 'react';
import { Defs, Path, RadialGradient, Stop, Svg } from 'react-native-svg';

import type { RNIconProps } from '@/features';
import { useFillId } from '@/hooks/useFillId';

import { TITLE } from '../style';

const Icon = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);
  return (
    <Svg height={size} style={style} viewBox="0 0 24 24" width={size} {...rest}>
      <Path
        clipRule="evenodd"
        d="M10.79 1.016c2.021-.047 4.268-.006 6.3.332 2.447.407 4.479 2.209 5.279 4.533.192.56.338 1.343.44 2.346.285 2.845.268 5.852-.164 8.804-.424 2.888-2.85 5.213-5.71 5.65-.79.12-1.889.227-3.294.319h-3.15c-1.49-.075-2.697-.19-3.621-.347-1.166-.198-2.234-.713-3.205-1.547C2.377 20 1.602 18.603 1.342 16.918a32.025 32.025 0 01-.24-2.151c-.124-1.505-.121-3.302-.063-4.64.044-1.033.146-2.073.307-3.121.366-2.383 1.996-4.383 4.26-5.293.647-.26 1.502-.44 2.562-.536a38.17 38.17 0 012.621-.161zm-.426 2.497c-1.003-.28-1.965-.39-2.843-.32a5.54 5.54 0 00-1.3.252c-1.465.48-2.467 1.57-2.851 3.099-.213.845-.23 1.804-.053 2.831.173 1.002.529 2.053 1.052 3.101 1.092 2.192 2.854 4.26 4.942 5.803.93.687 1.903 1.254 2.88 1.677 1.124.486 2.233.774 3.268.85.848.06 1.635-.023 2.332-.248 1.038-.335 1.852-.977 2.376-1.874.398-.68.623-1.494.663-2.405l.004-.101a7.543 7.543 0 000-.449l-.007-.129c-.045-.879-.247-1.816-.599-2.775a13.975 13.975 0 00-1.571-3.021 16.964 16.964 0 00-4.936-4.768c-1.108-.695-2.248-1.212-3.357-1.523z"
        fill={fill}
        fillRule="evenodd"
      />
      <Defs>
        <RadialGradient
          cx="0"
          cy="0"
          gradientTransform="matrix(-10.99996 10.50004 -15.35334 -16.08433 12 12)"
          gradientUnits="userSpaceOnUse"
          id={id}
          r="1"
        >
          <Stop offset="41.3%" stopColor="#CBFF00" />
          <Stop offset="67.80000000000001%" stopColor="#7EF426" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
});

Icon.displayName = 'KolorsColor';

export default Icon;
