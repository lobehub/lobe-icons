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
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M.507 19.883a.507.507 0 01-.489-.642L4.29 3.745a1.013 1.013 0 011.533-.578l5.622 3.687a1.013 1.013 0 001.11 0L18.2 3.165a1.013 1.013 0 011.532.58l4.25 15.497a.506.506 0 01-.49.64H18.07a6.297 6.297 0 001.53-4.115v-.177a6.09 6.09 0 00-1.513-4.017l-.697-3.495a.438.438 0 00-.694-.266L14.07 9.781a.748.748 0 01-.654.121 5.156 5.156 0 00-2.833 0 .746.746 0 01-.653-.121L7.302 7.81a.435.435 0 00-.688.269l-.675 3.652a5.36 5.36 0 00-1.539 3.76v.333c0 1.474.527 2.9 1.488 4.02l.032.038H.507z"
      />
      <path d="M9.213 16.843h1.52v-3.546h-1.29l-.23 3.546zm5.573 0h-1.52v-3.546h1.29l.23 3.546z" />
    </svg>
  );
});

export default Icon;
