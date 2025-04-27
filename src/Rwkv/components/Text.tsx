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
      viewBox="0 0 72 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M9.933 2c2.983 0 5.401 2.408 5.401 5.378v.672c0 2.627-1.891 4.815-4.392 5.285L15.925 22H12.97l-4.93-8.571H4.617V22H2V2h7.933zm-.844 2.017H4.616v7.395H9.09a3.705 3.705 0 003.713-3.698A3.705 3.705 0 009.09 4.017zM41.412 2v10.072L49.935 2h2.954l-6.302 7.534L53.65 22h-2.954l-5.818-10.42-3.465 4.142V22h-2.616V2h2.616zm19.052 20L53.986 2h2.87l5.137 17.455L67.131 2H70l-6.477 20h-3.06zM27.909 7.042l2.968 11.562L32.804 2h2.869l-2.996 20H29.47l-2.785-11.347L23.9 22h-3.207L17.697 2h2.87l1.926 16.604 2.968-11.562h2.448z" />
    </svg>
  );
});

export default Icon;
