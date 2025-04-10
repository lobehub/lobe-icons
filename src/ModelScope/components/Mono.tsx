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
      <path d="M2.667 5.3H8v2.667H5.333v2.666H2.667V8.467H.5v2.166h2.167V13.3H0V7.967h2.667V5.3zM2.667 13.3h2.666v2.667H8v2.666H2.667V13.3zM8 10.633h2.667V13.3H8v-2.667zM13.333 13.3v2.667h-2.666V13.3h2.666zM13.333 13.3v-2.667H16V13.3h-2.667z" />
      <path
        clipRule="evenodd"
        d="M21.333 13.3v-2.667h-2.666V7.967H16V5.3h5.333v2.667H24V13.3h-2.667zm0-2.667H23.5V8.467h-2.167v2.166z"
      />
      <path d="M21.333 13.3v5.333H16v-2.666h2.667V13.3h2.666z" />
    </svg>
  );
});

export default Icon;
