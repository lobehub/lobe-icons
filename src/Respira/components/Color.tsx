'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { COLOR_PRIMARY, TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="none"
      height={size}
      stroke={COLOR_PRIMARY}
      strokeWidth={1.7}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <circle cx="12" cy="12" r="4" /><circle cx="12" cy="8" r="4" /><circle cx="12" cy="16" r="4" /><circle cx="8.54" cy="10" r="4" /><circle cx="15.46" cy="10" r="4" /><circle cx="8.54" cy="14" r="4" /><circle cx="15.46" cy="14" r="4" /><circle cx="12" cy="12" r="9.3" />
    </svg>
  );
});

export default Icon;
