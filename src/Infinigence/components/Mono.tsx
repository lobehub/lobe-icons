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
      <path d="M14.186 19.885V4.226H5v4.137h4.226v11.522H5V24h13.412v-4.115h-4.226z" />
      <path d="M18.412 0h-4.226v4.226h4.226V0z" />
    </svg>
  );
});

export default Icon;
