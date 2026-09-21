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
      viewBox="0 0 56 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M6.4 21.6L2 2.4h3.7l3 14.4L11.8 2.4h3.4l3.1 14.4 3-14.4h3.7L20.4 21.6h-3.6L13.5 7.2 10.2 21.6H6.4zM28.2 21.6V2.4h3.6v19.2h-3.6zM38.4 21.6V5.7h-5.1V2.4h13.8v3.3H42v15.9h-3.6z" />
    </svg>
  );
});

export default Icon;
