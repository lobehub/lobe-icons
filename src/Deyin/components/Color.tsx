'use client';

import { memo } from 'react';

import { useFillId } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { COLOR_DOT, COLOR_GRADIENT_END, COLOR_GRADIENT_START, TITLE } from '../style';

const BOWL = { cx: 8.966, cy: 15.793, r: 5.69, sw: 3.034 };
const STEM = { sw: 3.034, x: 14.655, y1: 2.517, y2: 21.483 };
const DOT = { cx: 20.345, cy: 4.414, r: 1.897 };

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);

  return (
    <svg
      fill="none"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <circle
        cx={BOWL.cx}
        cy={BOWL.cy}
        fill="none"
        r={BOWL.r}
        stroke={fill}
        strokeWidth={BOWL.sw}
      />
      <path
        d={`M${STEM.x} ${STEM.y1}V${STEM.y2}`}
        stroke={fill}
        strokeLinecap="round"
        strokeWidth={STEM.sw}
      />
      <circle cx={DOT.cx} cy={DOT.cy} fill={COLOR_DOT} r={DOT.r} />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={id} x1="4" x2="20" y1="4" y2="20">
          <stop stopColor={COLOR_GRADIENT_START} />
          <stop offset="1" stopColor={COLOR_GRADIENT_END} />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
