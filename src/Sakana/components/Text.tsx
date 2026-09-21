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
      viewBox="0 0 80 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <text
        dominantBaseline="middle"
        fontFamily="Arial, sans-serif"
        fontSize="20"
        fontWeight="bold"
        textAnchor="start"
        x="0"
        y="12"
      >
        {TITLE}
      </text>
    </svg>
  );
});

export default Icon;
