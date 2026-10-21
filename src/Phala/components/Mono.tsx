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
      <path d="M20.16 0c1.344 0 2.016 0 2.53.262a2.4 2.4 0 0 1 1.048 1.049C24 1.824 24 2.496 24 3.84v16.32c0 1.344 0 2.016-.262 2.53a2.4 2.4 0 0 1-1.049 1.048C22.176 24 21.505 24 20.16 24H3.84c-1.344 0-2.016 0-2.53-.262A2.4 2.4 0 0 1 .263 22.69C0 22.176 0 21.505 0 20.16V3.84c0-1.344 0-2.016.262-2.53A2.4 2.4 0 0 1 1.31.263C1.824 0 2.496 0 3.84 0zM5.6 14.667v4h2.667v-4zM8.267 12v2.667h8V12zM5.6 5.334v6.634L8.267 12V8h8V5.334zM16.267 8v4h2.667V8z" />
    </svg>
  );
});

export default Icon;
