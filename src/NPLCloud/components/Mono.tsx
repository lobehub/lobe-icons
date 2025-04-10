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
      <path d="M10.033 5.807L0 18.193h10.792l4.636-5.724-5.395-6.662zm.651 5.421l-.651 2.553-.652-2.553-2.538.926 3.19-3.938 3.19 3.938-2.539-.926zM18.107 10.918l-5.893 7.275H24l-5.893-7.275zm0 4.683l-.383-1.499-1.49.544 1.873-2.313 1.873 2.313-1.49-.544-.383 1.5z" />
    </svg>
  );
});

export default Icon;
