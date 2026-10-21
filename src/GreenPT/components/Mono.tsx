'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Zm0.38 18.56c-3.59 0-6.5-2.928-6.5-6.54 0-3.612 2.91-6.54 6.5-6.54 3.59 0 6.5 2.928 6.5 6.54 0 3.612-2.91 6.54-6.5 6.54Z" />
    </svg>
  );
});

export default Icon;
