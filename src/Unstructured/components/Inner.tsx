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
      <path d="M12 24c-1.635 0-3.093-.358-4.375-1.075a8.065 8.065 0 01-3.038-2.936C3.862 18.73 3.5 17.306 3.5 15.717V2h4.32v13.427c0 .852.176 1.627.53 2.325.37.678.872 1.21 1.504 1.598.632.388 1.347.581 2.146.581.818 0 1.533-.193 2.146-.58a4.003 4.003 0 001.477-1.6c.372-.697.557-1.472.557-2.324V2h4.32v13.717c0 1.589-.372 3.013-1.115 4.272a7.857 7.857 0 01-3.01 2.936C15.093 23.642 13.635 24 12 24z" />
    </svg>
  );
});

export default Icon;
