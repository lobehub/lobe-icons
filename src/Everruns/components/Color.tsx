'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const ids = useFillIds(TITLE, 3);

  return (
    <svg
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={ids[0].id}
          x1="256"
          x2="256"
          y1="81.73"
          y2="274.09"
        >
          <stop offset="0" stopColor="#0A1636" />
          <stop offset="0.7" stopColor="#0A1636" />
          <stop offset="1" stopColor="#D4A43A" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={ids[1].id}
          x1="89.41"
          x2="256"
          y1="370.27"
          y2="274.09"
        >
          <stop offset="0" stopColor="#081C3F" />
          <stop offset="0.7" stopColor="#081C3F" />
          <stop offset="1" stopColor="#D4A43A" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={ids[2].id}
          x1="422.59"
          x2="256"
          y1="370.27"
          y2="274.09"
        >
          <stop offset="0" stopColor="#0B1233" />
          <stop offset="0.7" stopColor="#0B1233" />
          <stop offset="1" stopColor="#D4A43A" />
        </linearGradient>
      </defs>
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={18}
        transform="translate(12 12) scale(0.0546) translate(-256 -274.09)"
      >
        <circle cx="256" cy="201.73" r="120" stroke={ids[0].fill} />
        <circle cx="193.33" cy="310.27" r="120" stroke={ids[1].fill} />
        <circle cx="318.67" cy="310.27" r="120" stroke={ids[2].fill} />
      </g>
    </svg>
  );
});

export default Icon;
