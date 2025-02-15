'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M11.49 2H2v9.492h9.492V2h-.002z" />
      <path d="M22 2h-9.492v9.492H22V2z" />
      <path d="M11.49 12.508H2V22h9.492v-9.492h-.002z" />
      <path d="M22 12.508h-9.492V22H22v-9.492z" />
    </svg>
  );
});

export default Icon;
