'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 12 12"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M11.4782 3.26065H6.26081C5.97272 3.26065 5.73919 3.49419 5.73919 3.78247V5.34777C5.73919 5.63605 5.50583 5.86941 5.2174 5.86941H0.521791C0.233699 5.86941 0 6.10313 0 6.39124V8.47835C0 8.76646 0.233699 9 0.521791 9H5.73919C6.02728 9 6.26081 8.76646 6.26081 8.47835V6.91306C6.26081 6.62461 6.49417 6.39124 6.7826 6.39124H11.4782C11.7663 6.39124 12 6.15769 12 5.86941V3.78247C12 3.49419 11.7663 3.26065 11.4782 3.26065Z"
      />
    </svg>
  );
});

export default Icon;
