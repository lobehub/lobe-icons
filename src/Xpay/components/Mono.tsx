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
      <path d="M6 2H4C2.9 2 2 2.9 2 4v4L0 12l2 4v4c0 1.1.9 2 2 2h2v-2H4v-4.5L1.5 12 4 8.5V4h2V2zM18 2h2c1.1 0 2 .9 2 2v4l2 4-2 4v4c0 1.1-.9 2-2 2h-2v-2h2v-4.5l2.5-3.5-2.5-3.5V4h-2V2zM7.5 7H10l2 3.5L14 7h2.5l-3.5 5 3.5 5H14l-2-3.5L10 17H7.5l3.5-5-3.5-5zM17.5 2.5l.6 2L20 5l-1.9.5-.6 2-.6-2L15 5l1.9-.5.6-2z" />
    </svg>
  );
});

export default Icon;
