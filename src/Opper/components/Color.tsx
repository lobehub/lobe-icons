'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { COLOR_PRIMARY, TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path clipRule="evenodd" d="M15.945 24C9.221 24 3.771 18.628 3.771 12C3.771 -1.444 15.945 0.05 15.945 0.05C15.945 6.645 10.504 11.992 3.787 12C15.185 12.011 15.945 24 15.945 24ZM16.002 16.608C16.002 16.608 15.729 12.316 11.774 12.002C12.96 11.988 16.002 11.546 16.002 7.357C16.002 11.546 19.043 11.988 20.229 12.002C16.274 12.315 16.002 16.608 16.002 16.608Z" fill={COLOR_PRIMARY} fillRule="evenodd" />
    </svg>
  );
});

export default Icon;
