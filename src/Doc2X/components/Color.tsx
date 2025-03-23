'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g clipPath="url(#a)">
        <path
          d="M21.66 7.017a3.308 3.308 0 10-4.677-4.678l-3.458 3.458a3.308 3.308 0 104.678 4.677l3.458-3.457zM10.475 18.203a3.308 3.308 0 10-4.678-4.678l-3.458 3.458a3.308 3.308 0 104.678 4.677l3.458-3.457z"
          fill="#7748F9"
        />
        <path
          d="M18.203 13.525a3.308 3.308 0 10-4.678 4.678l3.458 3.458a3.308 3.308 0 004.678-4.678l-3.458-3.458zM7.017 2.339a3.308 3.308 0 10-4.678 4.678l3.458 3.457a3.308 3.308 0 004.677-4.678L7.017 2.34z"
          fill="#BFABFB"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h24v24H0z" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Icon;
