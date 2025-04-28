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
      viewBox="0 0 55 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M13.998 2h4.277L15.76 7.645a3.9 3.9 0 01-2.297 2.104h2.1v.01a3.834 3.834 0 013.548 3.83V22h-3.825V11.852a2.99 2.99 0 01-2.713 1.736H5.825V22H2V2.035h3.825v7.714h4.787L13.998 2zM25.93 2h-3.815v20h3.815V2zm23.468 0h3.815v20h-3.815V2zM28.936 22V2h3.855l4.888 7.828L42.557 2h3.836v20h-3.815V9.183l-4.896 7.855-4.93-7.898V22h-3.816z"
      />
    </svg>
  );
});

export default Icon;
