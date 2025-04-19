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
      viewBox="0 0 52 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M4.8 2H2v20h12.4v-2.4H4.8V2zM20 2h-2.8v20h12.4v-2.4H20V2zM32 22V2h3.6L41 13.435 46.4 2H50v20h-2.8V5.388l-5.4 10.989h-1.6L34.8 5.387V22H32z" />
    </svg>
  );
});

export default Icon;
