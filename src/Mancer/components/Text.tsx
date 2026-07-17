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
      viewBox="0 0 86 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M2 21.6V2.4h7.2c4.4 0 7.2 2.6 7.2 6.6 0 4-2.8 6.6-7.2 6.6H5.6v6H2zm3.6-9h3.4c2.4 0 3.8-1.3 3.8-3.6S11.4 5.4 9 5.4H5.6v7.2zM24.8 21.6V2.4h3.6v19.2h-3.6zm12.6.3c-4.4 0-7.6-3.2-7.6-7.5s3.2-7.5 7.6-7.5c4.5 0 7.7 3.2 7.7 7.5s-3.2 7.5-7.7 7.5zm0-3c2.3 0 4-1.9 4-4.5s-1.7-4.5-4-4.5-4 1.9-4 4.5 1.7 4.5 4 4.5zM52.4 21.6V2.4h3.6v2.1c1.1-1.5 2.9-2.4 5.2-2.4 4.2 0 7 2.9 7 7.3v12.2h-3.6V10.1c0-2.7-1.5-4.3-4-4.3-2.6 0-4.2 1.7-4.2 4.4v11.4h-3.6zM76.2 21.6V2.4h3.6v2.1c1.1-1.5 2.9-2.4 5.2-2.4 4.2 0 7 2.9 7 7.3v12.2h-3.6V10.1c0-2.7-1.5-4.3-4-4.3-2.6 0-4.2 1.7-4.2 4.4v11.4h-3.6z" />
    </svg>
  );
});

export default Icon;
