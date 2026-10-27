'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c] = useFillIds(TITLE, 3);
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
      <g transform="scale(0.046875)">
        <rect fill={a.fill} height="512" rx="128" width="512" />
        <path d="M256 60.73c25.72 103.19 100.29 173.07 203.91 195.51C356.29 278.68 281.72 348.56 256 451.75 230.28 348.56 155.71 278.68 52.09 256.24 155.71 233.8 230.28 163.92 256 60.73" fill={b.fill} />
        <path d="M256 60.73c25.72 103.19 100.29 173.07 203.91 195.51C356.29 278.68 281.72 348.56 256 451.75 230.28 348.56 155.71 278.68 52.09 256.24 155.71 233.8 230.28 163.92 256 60.73" fill={c.fill} />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1=".1"
          x2="520.7"
          y1=".1"
          y2="502.8"
        >
          <stop offset="0" stopColor="#ab5fa6" />
          <stop offset=".08" stopColor="#a95da4" />
          <stop offset=".25" stopColor="#9a509f" />
          <stop offset=".4" stopColor="#834299" />
          <stop offset=".48" stopColor="#773a92" />
          <stop offset=".64" stopColor="#68338b" />
          <stop offset=".74" stopColor="#5f2d83" />
          <stop offset="1" stopColor="#4a2b76" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="0"
          x2="0"
          y1="0"
          y2="512"
        >
          <stop offset=".13" stopColor="#d660a5" />
          <stop offset=".26" stopColor="#d670ac" />
          <stop offset=".35" stopColor="#d681ae" />
          <stop offset=".46" stopColor="#d89bad" />
          <stop offset=".5" stopColor="#daa8ab" />
          <stop offset=".71" stopColor="#eacf9d" />
          <stop offset=".82" stopColor="#f1e093" />
          <stop offset=".86" stopColor="#f2e491" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="0"
          x2="512"
          y1="0"
          y2="0"
        >
          <stop offset=".14" stopColor="#98db9a" stopOpacity=".82" />
          <stop offset=".17" stopColor="#8de49a" stopOpacity=".62" />
          <stop offset=".19" stopColor="#92e09d" stopOpacity=".6" />
          <stop offset=".22" stopColor="#a7cea3" stopOpacity=".71" />
          <stop offset=".23" stopColor="#adc9a5" stopOpacity=".73" />
          <stop offset=".25" stopColor="#b0c6a7" stopOpacity=".73" />
          <stop offset=".28" stopColor="#b4c1a9" stopOpacity=".68" />
          <stop offset=".37" stopColor="#b6bbab" stopOpacity=".37" />
          <stop offset=".44" stopColor="#a5baaf" stopOpacity=".09" />
          <stop offset=".47" stopColor="#94b8b2" stopOpacity=".02" />
          <stop offset=".5" stopColor="#ffb69f" stopOpacity="0" />
          <stop offset=".55" stopColor="#ffb9a1" stopOpacity=".05" />
          <stop offset=".68" stopColor="#fdc5a0" stopOpacity=".42" />
          <stop offset=".71" stopColor="#fecb9e" stopOpacity=".51" />
          <stop offset=".76" stopColor="#fccf9c" stopOpacity=".71" />
          <stop offset=".79" stopColor="#fcd09b" stopOpacity=".82" />
          <stop offset=".82" stopColor="#fcd29a" stopOpacity=".91" />
          <stop offset=".85" stopColor="#fcd399" stopOpacity=".97" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
