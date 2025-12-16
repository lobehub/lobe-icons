'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="none"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 26 23"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M3.764 9.41a9.41 9.41 0 1 0 18.82 0h3.765A13.175 13.175 0 0 1 0 9.41zm15.056 0a5.646 5.646 0 1 1-11.292 0zM13.174 0a9.41 9.41 0 0 1 9.41 9.41H18.82a5.646 5.646 0 1 0-11.292 0H3.764A9.41 9.41 0 0 1 13.174 0"
        fill="currentColor"
      />
    </svg>
  );
});

export default Icon;
