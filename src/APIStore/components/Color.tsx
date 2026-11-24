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
      <path d="M10.1 2h3.8l8.1 20h-4.4L12 6.9 8.6 15.4c-1.6.4-3 1-4.3 1.8z" fill={a.fill} />
      <path d="M2.6 22c2.6-3.6 7.4-6 13.6-6.4l.9 2.1c-5.6.1-10.3 1.7-13.6 4.3z" fill={b.fill} />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={a.id} x1="4.3" x2="22" y1="12" y2="12">
          <stop stopColor="#26A2FD" />
          <stop offset=".45" stopColor="#1B87F9" />
          <stop offset=".62" stopColor="#1662D9" />
          <stop offset=".75" stopColor="#0F3BA9" />
          <stop offset="1" stopColor="#0D389D" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id={b.id} x1="2.6" x2="17.1" y1="19" y2="19">
          <stop stopColor="#1C89FA" />
          <stop offset="1" stopColor="#3AAEFF" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
