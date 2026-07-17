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
      <g transform="translate(-4.364, -6.91) scale(0.7273)">
        <path d="M38,15 L37,14 L34,14 L33,13 L23,13 L22,14 L20,14 L19,15 L18,15 L17,16 L16,16 L15,17 L14,17 L12,19 L11,19 L10,20 L9,20 L8,21 L8,22 L9,22 L11,20 L12,20 L13,19 L14,19 L15,18 L16,18 L18,20 L18,25 L17,26 L16,26 L15,25 L12,25 L11,26 L8,26 L6,28 L8,28 L9,27 L12,27 L13,26 L15,26 L17,28 L17,30 L11,36 L13,36 L17,32 L17,31 L18,30 L18,29 L19,28 L21,28 L25,32 L25,33 L24,34 L23,34 L22,35 L21,35 L20,36 L19,36 L17,38 L19,38 L20,37 L21,37 L23,35 L24,35 L25,34 L26,34 L27,33 L28,33 L34,27 L34,26 L36,24 L36,22 L37,21 L37,19 L38,18 Z" />
      </g>
    </svg>
  );
});

export default Icon;
