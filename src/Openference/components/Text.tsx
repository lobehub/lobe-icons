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
      viewBox="0 0 115 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <text
        dominantBaseline="central"
        fontFamily="Geist, 'Helvetica Neue', Arial, sans-serif"
        fontSize="20"
        fontWeight="700"
        letterSpacing="-0.3"
        x="0"
        y="12"
      >
        openference
      </text>
    </svg>
  );
});

Icon.displayName = 'OpenferenceText';

export default Icon;
