'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
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
      <defs>
        <radialGradient
          cx="0"
          cy="0"
          gradientTransform="translate(9.4 8.6) rotate(52) scale(11.2)"
          gradientUnits="userSpaceOnUse"
          id="gptzzz-planet"
          r="1"
        >
          <stop stopColor="#E1DCFF" />
          <stop offset=".28" stopColor="#A99DFF" />
          <stop offset=".64" stopColor="#8375FF" />
          <stop offset="1" stopColor="#5B49E6" />
        </radialGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="gptzzz-ring"
          x1="1.2"
          x2="22.8"
          y1="15"
          y2="9"
        >
          <stop stopColor="#7C6CFF" />
          <stop offset=".45" stopColor="#3FA0E8" />
          <stop offset="1" stopColor="#33D6EF" />
        </linearGradient>
        <clipPath id="gptzzz-front">
          <rect height="12" width="24" x="0" y="12" />
        </clipPath>
      </defs>
      <path
        d="M.7 12a11.3 4.05 0 1 1 22.6 0 11.3 4.05 0 1 1-22.6 0ZM2.1 12a9.9 2.55 0 1 0 19.8 0 9.9 2.55 0 1 0-19.8 0ZM6.05 12a5.95 5.95 0 1 1 11.9 0 5.95 5.95 0 1 1-11.9 0Z"
        fill="url(#gptzzz-ring)"
        fillRule="evenodd"
        transform="rotate(-22 12 12)"
      />
      <circle cx="12" cy="12" fill="url(#gptzzz-planet)" r="5.95" />
      <g transform="rotate(-22 12 12)">
        <path
          clipPath="url(#gptzzz-front)"
          d="M.7 12a11.3 4.05 0 1 1 22.6 0 11.3 4.05 0 1 1-22.6 0ZM2.1 12a9.9 2.55 0 1 0 19.8 0 9.9 2.55 0 1 0-19.8 0ZM6.05 12a5.95 5.95 0 1 1 11.9 0 5.95 5.95 0 1 1-11.9 0Z"
          fill="url(#gptzzz-ring)"
          fillRule="evenodd"
        />
      </g>
      <circle cx="18.05" cy="10.35" fill="#33D6EF" r="1.15" />
    </svg>
  );
});

export default Icon;
