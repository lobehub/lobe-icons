'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M23.111 4.6a.914.914 0 00-.861.161A13.443 13.443 0 017.947 8.897L7.38 6.831a1.076 1.076 0 00-1.211-.698l.27 2.18c-1.816-.827-2.313-.946-3.587-2.45C2.674 5.729 1.263 4.472.89 4.6a11.906 11.906 0 005.892 6.497l.738 5.97s.33 2.286 2.473 2.286h4.586c2.144 0 2.474-2.286 2.474-2.286l.518-4.28c-1.393-.11-2.268.857-2.546 1.814-.465 1.614-.465 1.716-.557 1.998-.188.575-.806.644-.806.644h-2.753s-.617-.07-.806-.644c-.12-.371-.727-2.54-1.335-4.74A11.877 11.877 0 0023.11 4.599V4.6z"
        fill="#06AEEF"
      />
    </svg>
  );
});

export default Icon;
