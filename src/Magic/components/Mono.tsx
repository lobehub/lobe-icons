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
      <path d="M15.294 20.628c-4.8 0-8.706-3.9-8.706-8.695 0-1.168.948-2.116 2.118-2.116s2.12.948 2.12 2.116a4.47 4.47 0 004.468 4.463 4.47 4.47 0 004.468-4.463V8.97c0-1.169.95-2.116 2.12-2.116C23.051 6.854 24 7.8 24 8.97v2.963c0 4.794-3.906 8.695-8.706 8.695z" />
      <path d="M2.119 17.074A2.117 2.117 0 010 14.958v-2.964C0 7.2 3.906 3.3 8.706 3.3c4.8 0 8.706 3.9 8.706 8.694a2.117 2.117 0 01-2.118 2.116 2.117 2.117 0 01-2.12-2.116 4.47 4.47 0 00-4.468-4.462 4.47 4.47 0 00-4.468 4.462v2.964a2.117 2.117 0 01-2.12 2.116z" />
    </svg>
  );
});

export default Icon;
