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
      <g>
        <path d="M23.997 3v6.978L9.325 15.022H9.4V22l14.596-.001L0 22v-6.978h6.746l9.29-5.044h-.081V3h8.042z" />
        <path d="M.001 3h16.954v6.978H.001zM8.4 15.022H24V22H8.4z" opacity=".5" />
      </g>
    </svg>
  );
});

export default Icon;
