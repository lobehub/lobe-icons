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
        d="M5.743 4C1.703 4 .306 13.31.002 15.83c-.026.216.241.328.404.182 7.957-7.15 11.644 3.594 14.802 3.594-1.768 0-3.063-4.94-4.69-9.263C9.253 6.985 7.788 4 5.743 4z"
        fill={a.fill}
      />
      <path
        d="M23.58 15.76c.153.185.454.063.417-.174-.364-2.303-1.562-8.395-4.078-8.395-1.547 0-1.941 3.084-2.337 6.178l-.002.01c3.381 0 4.665.758 6 2.38z"
        fill={b.fill}
      />
      <path
        d="M10.517 10.343c1.627 4.322 2.923 9.263 4.69 9.263 1.573 0 1.975-3.117 2.373-6.226l.002-.01c.396-3.095.79-6.18 2.336-6.18-3.1 0-4.71 11.248-9.4 3.153z"
        fill="#DDB1FF"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="0"
          x2="15.209"
          y1="11.563"
          y2="12.019"
        >
          <stop stopColor="#3239DC" />
          <stop offset="1" stopColor="#5A38E2" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="17.58"
          x2="24.003"
          y1="11.387"
          y2="11.533"
        >
          <stop stopColor="#3239DC" />
          <stop offset="1" stopColor="#5A38E2" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
