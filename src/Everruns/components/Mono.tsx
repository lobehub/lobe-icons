'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
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
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={18}
        transform="translate(12 12) scale(0.0546) translate(-256 -274.09)"
      >
        <circle cx="256" cy="201.73" r="120" />
        <circle cx="193.33" cy="310.27" r="120" />
        <circle cx="318.67" cy="310.27" r="120" />
      </g>
    </svg>
  );
});

export default Icon;
