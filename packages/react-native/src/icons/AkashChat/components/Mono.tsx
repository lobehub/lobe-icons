'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 -1 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <defs>
        <linearGradient
          gradientTransform="scale(.13953)"
          gradientUnits="userSpaceOnUse"
          id="a"
          x1="99.457"
          x2="132.718"
          y1="136.148"
          y2="98.898"
        >
          <stop offset="0" stopColor="#ff414c" />
          <stop offset="1" stopColor="#ff414c" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M15.902 13.836l3.93 6.914h-7.934L7.93 13.836zm0 0" />
      <path d="M19.828 20.754l3.961-6.918L15.86 0H7.93zm0 0" />
      <path d="M3.965 6.914h7.93L3.969 20.75 0 13.836zm0 0" />
    </svg>
  );
});

export default Icon;
