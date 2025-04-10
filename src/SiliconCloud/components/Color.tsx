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
      <path
        clipRule="evenodd"
        d="M20.663 0h-1.741c-5.575 0-8.788 3.56-8.788 9.018v.937a7.161 7.161 0 105.043 5.451h5.486a2.623 2.623 0 100-5.246h-5.458V8.787c0-2.09 1.51-3.6 3.717-3.6h1.741a2.594 2.594 0 000-5.187zM10.29 16.839a2.13 2.13 0 10-4.258-.094 2.13 2.13 0 004.258.094z"
        fill={COLOR_PRIMARY}
        fillRule="evenodd"
      />
    </svg>
  );
});

export default Icon;
