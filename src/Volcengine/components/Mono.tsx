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
      <path
        d="M7.29 5.36L3.148 21.737a.215.215 0 00.203.261h8.29a.214.214 0 00.215-.261L7.7 5.359a.214.214 0 00-.41 0z"
        fillOpacity=".5"
      />
      <path
        clipRule="evenodd"
        d="M4.553 16.18l-1.406 5.558a.214.214 0 00.203.261h2.42-4.551a.214.214 0 01-.214-.26l2.275-8.961a.214.214 0 01.409 0l.864 3.402z"
      />
      <path
        d="M14.44.15a.214.214 0 00-.41 0L8.366 21.739a.214.214 0 00.214.261H19.9a.214.214 0 00.215-.261L14.44.151z"
        fillOpacity=".5"
      />
      <path
        clipRule="evenodd"
        d="M16.694 22h3.207a.215.215 0 00.214-.262l-1.839-6.993 1.164-4.592a.214.214 0 01.411 0l2.951 11.586a.214.214 0 01-.214.261h-5.894z"
      />
      <path d="M10.278 7.741L6.685 21.736a.214.214 0 00.214.264h7.17a.216.216 0 00.214-.166.216.216 0 000-.098L10.687 7.742a.214.214 0 00-.409 0z" />
    </svg>
  );
});

export default Icon;
