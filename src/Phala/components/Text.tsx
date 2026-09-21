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
      viewBox="0 0 62 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M4 21.6V2.4h3.6v19.2H4zm8.4 0V2.4H16v19.2h-3.6zm8.4 0L14.8 2.4h3.7l2.8 14.4L24.1 2.4h3.7L23.2 21.6h-4.4zM30 21.6V2.4h3.6v19.2H30zm12.6.3c-4.4 0-7.6-3.2-7.6-7.5s3.2-7.5 7.6-7.5c4.5 0 7.7 3.2 7.7 7.5s-3.2 7.5-7.7 7.5zm0-3c2.3 0 4-1.9 4-4.5s-1.7-4.5-4-4.5-4 1.9-4 4.5 1.7 4.5 4 4.5zM52.2 21.6l-4.4-7.2h-1.2v7.2H43V2.4h3.6v7.2h1.2l4.4-7.2h4.2l-5.9 9 6.1 10.2h-4.4z" />
    </svg>
  );
});

export default Icon;
