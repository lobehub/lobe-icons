'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b] = useFillIds(TITLE, 2);
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
      <path
        d="M11.765.03C5.327.03.108 5.25.108 11.686c0 3.514 1.556 6.665 4.015 8.804L9.89 8.665h6.451L9.31 23.083c.807.173 1.63.26 2.455.26 6.438 0 11.657-5.22 11.657-11.658S18.202.028 11.765.028V.03z"
        fill={a.fill}
      />
      <path
        d="M4.123 20.489l6.362-13.046c.017-.036.035-.073.055-.11l.086-.18h.005a6.697 6.697 0 015.913-3.551c2.784 0 5.171 1.7 6.184 4.116-1.622-4.485-5.92-7.69-10.963-7.69C5.327.028.108 5.247.108 11.685c0 3.514 1.556 6.666 4.015 8.804z"
        fill={b.fill}
      />

      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="13.469"
          x2="12.557"
          y1="4.823"
          y2="21.302"
        >
          <stop offset=".313" stopColor="#9EC0E0" />
          <stop offset="1" stopColor="#fff" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="13.739"
          x2="5.647"
          y1="4.229"
          y2="17.386"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#BCD5EC" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
