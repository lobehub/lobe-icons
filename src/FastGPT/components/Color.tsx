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
        d="M15.766.004c.65.024 1.293.172 1.896.44a5.43 5.43 0 011.763 1.264 5.877 5.877 0 011.178 1.89c.273.708.413 1.466.413 2.231H8.56V24a6.817 6.817 0 01-2.32-.404 6.179 6.179 0 01-1.965-1.15 5.321 5.321 0 01-1.314-1.722 4.741 4.741 0 01-.461-2.03l.002-.058H2.5V5.598h.006c.012-.303.049-.606.111-.906.234-1.13.81-2.17 1.658-2.984A6.14 6.14 0 017.378.112c.368-.07.739-.108 1.11-.112h7.278v.004z"
        fill={a.fill}
      />
      <path
        d="M15.766 10.222c.545.01 1.084.136 1.588.375.523.25 1 .614 1.4 1.074.401.46.72 1.006.937 1.607.217.6.328 1.244.328 1.894h-4.317v-.002H11.74v-4.949l4.025.001z"
        fill={b.fill}
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="11.758"
          x2="11.758"
          y1="0"
          y2="24"
        >
          <stop stopColor="#326DFF" />
          <stop offset="1" stopColor="#8EAEFF" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="11.758"
          x2="11.758"
          y1="0"
          y2="24"
        >
          <stop stopColor="#326DFF" />
          <stop offset="1" stopColor="#8EAEFF" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
