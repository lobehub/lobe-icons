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
      <path d="M19.667 8.275c0-4.57-4.15-8.275-9.27-8.275-1.774 0-3.213 3.705-3.213 8.275 0 1.143.09 2.233.253 3.224H4.29L1 23h9.4v-6.447c5.117 0 9.266-3.707 9.266-8.275l.001-.002zm-9.27-6.76c.93 0 1.682 3.028 1.682 6.76 0 3.733-.752 6.76-1.681 6.76-.93 0-1.681-3.027-1.681-6.76 0-3.732.752-6.76 1.68-6.76z" />
      <path d="M19.848 16.552h-9.44L14.028 23h9.438l-3.618-6.448z" />
    </svg>
  );
});

export default Icon;
