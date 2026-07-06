'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { COLOR_PRIMARY, TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 582 96"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <text
        fill={COLOR_PRIMARY}
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="54"
        fontWeight="700"
        x="0"
        y="61"
      >
        Persona
      </text>
      <text
        fill="#60a5fa"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="54"
        fontWeight="700"
        x="221"
        y="61"
      >
        Stack
      </text>
      <text
        fill="#6b7280"
        fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="54"
        fontWeight="700"
        x="362"
        y="61"
      >
        .ai
      </text>
    </svg>
  );
});

export default Icon;
