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
      viewBox="0 0 54 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M7.605 3.781H2v14.771h5.605a7.386 7.386 0 100-14.771zM7.08 6.295H4.933v9.743h2.148a4.872 4.872 0 000-9.743z"
      />
      <path d="M19.548 2a1.729 1.729 0 100 3.457h.21a1.729 1.729 0 100-3.457h-.21zM21.171 6.819h-3.038v11.733h3.038V6.82zM35.314 6.82h-3.143l4.62 11.392L34.266 24h3.038l7.28-17.18h-3.037l-3.182 8.186-3.052-8.187zM30.233 4.567v-2.41s-2.142-.04-3.195.681c-.911.624-1.571 1.724-1.571 2.829 0 .468-.006.847-.015 1.152h-1.347v2.41h1.257v9.323H28.4V9.23h1.99v-2.41h-2.01c-.02-.663-.002-1.45.387-1.833.532-.525 1.466-.42 1.466-.42z" />
      <path d="M45.371 16.771h6.914v3.457h-6.914z" />
    </svg>
  );
});

export default Icon;
