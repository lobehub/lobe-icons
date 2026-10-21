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
      <circle cx="12" cy="12" fill={COLOR_PRIMARY} r="12" />
      <path d="M18.627 4L14.056 7.571 14.935 4H18.627Z" fill="#000" />
      <path
        d="M10.716 17.727C10.387 19.062 9.189 20 7.815 20 5.875 20 4.45 18.181 4.913 16.298L7.249 6.81C7.655 5.16 9.135 4 10.834 4H14.094L10.716 17.727ZM11.633 4.985C11.293 4.985 11.017 5.26 11.017 5.6 11.017 5.94 11.293 6.215 11.633 6.215 11.973 6.215 12.248 5.94 12.248 5.6 12.248 5.26 11.973 4.985 11.633 4.985Z"
        fill="#000"
      />
      <path
        d="M11.035 19.933L13.89 8.307 18.527 16.051C19.55 17.76 18.319 19.933 16.327 19.933H11.035Z"
        fill="#000"
      />
    </svg>
  );
});

export default Icon;
