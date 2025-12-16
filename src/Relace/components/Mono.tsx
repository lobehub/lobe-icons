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
      viewBox="0 0 121 121"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <mask
        height="121"
        id="relace-mask"
        maskUnits="userSpaceOnUse"
        style={{ maskType: 'luminance' }}
        width="121"
        x="0"
        y="0"
      >
        <path d="M120.211 0H0v120.211h120.211z" fill="#fff" />
      </mask>
      <g mask="url(#relace-mask)">
        <path
          d="M9.865 83.06c22.4 3.418 69.692 2.855 79.667-26.746C99.506 26.712 82.69 23.27 76.36 23.27c-8.312.087-20.588 10.283-3.197 50.376 17.39 40.094 20.269 39.211 21.74 41.418"
          stroke="currentColor"
          strokeWidth="10.723"
        />
      </g>
    </svg>
  );
});

export default Icon;
