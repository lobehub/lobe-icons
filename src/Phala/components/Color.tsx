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
      <g fill={COLOR_PRIMARY} transform="scale(0.5)">
        <path d="M11.2 29.3337H16.5333V37.3337H11.2V29.3337Z" />
        <path d="M32.5333 16.0003H37.8667V24.0003H32.5333V16.0003Z" />
        <path d="M16.5333 24.0003H32.5333V29.3337H16.5333V24.0003Z" />
        <path d="M11.2 10.667H32.5333V16.0003H16.5333V24.0003L11.2 23.9337V10.667Z" />
      </g>
    </svg>
  );
});

export default Icon;
