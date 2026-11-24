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
        d="M7.722 2.12C9.13 1.51 10.692 1.75 11.838 2.619C12.542 3.154 13.492 3.264 14.299 2.904C15.612 2.32 17.188 2.442 18.421 3.356C19.652 4.27 20.226 5.743 20.046 7.17C19.936 8.046 20.315 8.922 21.029 9.442C22.191 10.288 22.872 11.713 22.697 13.235C22.521 14.758 21.532 15.991 20.208 16.549C19.393 16.892 18.823 17.66 18.731 18.539C18.581 19.968 17.687 21.272 16.28 21.88C14.873 22.489 13.312 22.251 12.167 21.384C11.463 20.85 10.514 20.74 9.706 21.101C8.393 21.685 6.817 21.563 5.586 20.649C4.354 19.735 3.781 18.262 3.96 16.837C4.07 15.959 3.69 15.082 2.975 14.563C1.81 13.718 1.128 12.291 1.303 10.766C1.479 9.244 2.468 8.01 3.792 7.453C4.608 7.11 5.178 6.341 5.27 5.463C5.42 4.033 6.314 2.729 7.722 2.12Z"
        fill="none"
        stroke="#242424"
        strokeWidth={2.375}
      />
      <path
        d="M8.903 8.454a1.907 1.907 0 0 1 1.907 1.907v2.859a1.907 1.907 0 0 1 -3.814 0v-2.859a1.907 1.907 0 0 1 1.907 -1.907z"
        fill={a.fill}
      />
      <path
        d="M15.575 8.454a1.907 1.907 0 0 1 1.907 1.907v2.859a1.907 1.907 0 0 1 -3.814 0v-2.859a1.907 1.907 0 0 1 1.907 -1.907z"
        fill={b.fill}
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="8.903"
          x2="8.903"
          y1="8.454"
          y2="15.127"
        >
          <stop stopColor="#FF6512" />
          <stop offset="1" stopColor="#FFAA7C" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="15.575"
          x2="15.575"
          y1="8.454"
          y2="15.127"
        >
          <stop stopColor="#7E7CFF" />
          <stop offset="1" stopColor="#4340FF" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
