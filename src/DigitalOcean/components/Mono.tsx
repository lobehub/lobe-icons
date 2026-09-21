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
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M11.968 24v-4.651c4.923 0 8.744-4.882 6.854-10.064a6.95 6.95 0 0 0-4.148-4.148C9.493 3.261 4.61 7.068 4.61 11.992H0C0 4.144 7.589-1.976 15.816.595c3.59 1.129 6.46 3.985 7.575 7.575C25.935 16.411 19.828 24 11.968 24" />
      <path d="M11.981 19.362H7.357v-4.624h4.624zm-4.624 3.563H3.794v-3.563h3.563zm-3.563-3.563H.816v-2.978h2.978z" />
    </svg>
  );
});

export default Icon;
