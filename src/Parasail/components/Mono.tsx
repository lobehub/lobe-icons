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
      <path d="M0 15.852c4.5 0 8.147 3.648 8.147 8.148H0v-8.148z" />
      <path
        clipRule="evenodd"
        d="M0 7.688v.018C9 7.706 16.294 15 16.294 24h.019l-.018-.036c3.33-.2 8.864-2.447 7.49-9.58A19.95 19.95 0 009.61.213C2.482-1.155.235 4.374.036 7.704L0 7.688z"
      />
    </svg>
  );
});

export default Icon;
