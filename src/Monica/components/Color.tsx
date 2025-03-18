'use client';

import { forwardRef } from 'react';

import { useFillId } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  const { id, fill } = useFillId(TITLE);
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <circle cx="12" cy="12" fill={fill} r="12" />
      <ellipse cx="12" cy="12" fill="#fff" rx="9.75" ry="8.438" />
      <path
        d="M16.207 10.195a.96.96 0 111.357 1.357l-1.114 1.114 1.473.85a.96.96 0 11-.96 1.662l-2.444-1.411a1.003 1.003 0 01-.072-.046.962.962 0 01-.236-1.53l1.996-1.996zM7.688 9.937a1.5 1.5 0 00-1.5 1.5v2.25a1.5 1.5 0 003 0v-2.25a1.5 1.5 0 00-1.5-1.5z"
        fill="#1E1E1E"
      />

      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={id}
          x1="0"
          x2="24"
          y1="12.281"
          y2="12.281"
        >
          <stop stopColor="#A83FE0" />
          <stop offset=".477" stopColor="#515FFB" />
          <stop offset="1" stopColor="#2BB5DD" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
