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
        d="M7.539 1.611C9.021 0.969 10.666 1.222 11.872 2.137C12.613 2.7 13.613 2.816 14.463 2.437C15.845 1.822 17.504 1.95 18.801 2.913C20.097 3.875 20.701 5.425 20.512 6.927C20.396 7.849 20.795 8.772 21.547 9.319C22.77 10.209 23.487 11.709 23.302 13.311C23.117 14.915 22.076 16.213 20.682 16.8C19.825 17.161 19.225 17.969 19.128 18.895C18.97 20.399 18.029 21.771 16.548 22.412C15.067 23.053 13.424 22.802 12.218 21.889C11.477 21.327 10.478 21.212 9.628 21.591C8.246 22.206 6.587 22.078 5.291 21.116C3.994 20.154 3.391 18.603 3.579 17.103C3.695 16.179 3.295 15.256 2.542 14.709C1.316 13.82 0.598 12.318 0.783 10.713C0.968 9.11 2.009 7.812 3.403 7.225C4.261 6.864 4.861 6.055 4.958 5.13C5.116 3.625 6.057 2.253 7.539 1.611Z"
        fill="none"
        stroke="#242424"
        strokeWidth={2.5}
      />
      <path
        d="M8.782 8.279a2.007 2.007 0 0 1 2.007 2.007v3.01a2.007 2.007 0 0 1 -4.014 0v-3.01a2.007 2.007 0 0 1 2.007 -2.007z"
        fill={a.fill}
      />
      <path
        d="M15.806 8.279a2.007 2.007 0 0 1 2.007 2.007v3.01a2.007 2.007 0 0 1 -4.014 0v-3.01a2.007 2.007 0 0 1 2.007 -2.007z"
        fill={b.fill}
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="8.782"
          x2="8.782"
          y1="8.279"
          y2="15.303"
        >
          <stop stopColor="#FF6512" />
          <stop offset="1" stopColor="#FFAA7C" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="15.806"
          x2="15.806"
          y1="8.279"
          y2="15.303"
        >
          <stop stopColor="#7E7CFF" />
          <stop offset="1" stopColor="#4340FF" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
