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
      <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" fill="currentColor" />
      <path d="M12 8l-4 2v4l4 2 4-2v-4l-4-2z" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  );
});

export default Icon;