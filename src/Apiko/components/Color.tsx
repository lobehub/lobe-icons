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
      <rect fill={COLOR_PRIMARY} height="24" rx="5.25" width="24" />
      <path
        d="M5.779 16.054L11.123 5.554A0.984 0.984 0 0 1 12.877 6.446L7.534 16.946A0.984 0.984 0 0 1 5.779 16.054zM12.877 5.554L18.221 16.054A0.984 0.984 0 0 1 16.466 16.946L11.123 6.446A0.984 0.984 0 0 1 12.877 5.554zM9.375 11.297L14.625 11.297A0.891 0.891 0 0 1 14.625 13.078L9.375 13.078A0.891 0.891 0 0 1 9.375 11.297zM5.25 16.5A1.406 1.406 0 1 1 8.062 16.5A1.406 1.406 0 1 1 5.25 16.5zM10.594 6A1.406 1.406 0 1 1 13.406 6A1.406 1.406 0 1 1 10.594 6zM15.938 16.5A1.406 1.406 0 1 1 18.75 16.5A1.406 1.406 0 1 1 15.938 16.5z"
        fill="#fff"
      />
    </svg>
  );
});

export default Icon;
