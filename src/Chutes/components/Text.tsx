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
      <path d="M4 21.6L8 2.4h4l2.4 12L16.8 2.4h4l2.4 12L25.6 2.4h4l-4 19.2h-3.6L23.4 9.6 20.8 21.6h-3.6L14.6 9.6 11.8 21.6H4zM32 21.6V2.4h3.6v19.2H32zm8.4 0V2.4H44v19.2h-3.6zm8.4 0L44.8 2.4h3.7l2.8 14.4L54.1 2.4h3.7L53.2 21.6h-4.4zM60 21.6V2.4h3.6v19.2H60zm12.6.3c-4.4 0-7.6-3.2-7.6-7.5s3.2-7.5 7.6-7.5c4.5 0 7.7 3.2 7.7 7.5s-3.2 7.5-7.7 7.5zm0-3c2.3 0 4-1.9 4-4.5s-1.7-4.5-4-4.5-4 1.9-4 4.5 1.7 4.5 4 4.5z" />
    </svg>
  );
});

export default Icon;
