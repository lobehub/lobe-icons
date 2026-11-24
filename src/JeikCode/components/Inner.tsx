'use client';

import { memo } from 'react';

import { useFillId } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

/**
 * Inner symbol without the background card, used for embedding when only the
 * floating glowing glyph is desired (similar to Sora/Codex Inner).
 */
const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);

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
        d="M8.11 5.81L15.89 5.81C16.48 5.81 16.95 6.28 16.95 6.87L16.95 7.58C16.95 8.17 16.48 8.64 15.89 8.64L13.3 8.64L13.3 14.18C13.3 16.9 11.17 19.02 8.46 19.02C5.75 19.02 3.86 16.9 3.86 14.77C3.86 14.06 4.45 13.47 5.16 13.47C5.87 13.47 6.46 14.06 6.46 14.77C6.46 15.72 7.28 16.42 8.46 16.42C9.64 16.42 10.7 15.48 10.7 14.18L10.7 8.64L8.11 8.64C7.52 8.64 7.05 8.17 7.05 7.58L7.05 6.87C7.05 6.28 7.52 5.81 8.11 5.81Z"
        fill={fill}
      />
      <path
        d="M4.95 9.28L5.11 9.2L5.29 9.17L5.47 9.2L5.56 9.25L5.64 9.31L5.71 9.39L5.76 9.48L5.81 9.66L5.79 9.84L5.75 9.94L5.69 10.03L3.45 12.18L5.69 14.33L5.78 14.49L5.81 14.67L5.77 14.85L5.72 14.94L5.66 15.02L5.51 15.13L5.34 15.18L5.24 15.18L5.13 15.17L4.97 15.09L2.31 12.56L2.23 12.46L2.19 12.37L2.16 12.27L2.15 12.16L2.16 12.06L2.2 11.96L2.25 11.87L2.31 11.79Z"
        fill={fill}
      />
      <path
        d="M18.36 10.08L18.29 10L18.24 9.91L18.21 9.82L18.19 9.71L18.2 9.61L18.23 9.51L18.28 9.42L18.34 9.33L18.42 9.27L18.58 9.19L18.76 9.17L18.94 9.21L19.07 9.3L21.7 11.81L21.77 11.89L21.81 11.99L21.84 12.09L21.85 12.19L21.81 12.37L21.77 12.46L21.7 12.54L19.07 15.06L18.94 15.14L18.76 15.18L18.58 15.17L18.42 15.09L18.34 15.02L18.28 14.94L18.23 14.85L18.2 14.75L18.19 14.64L18.21 14.54L18.24 14.44L18.29 14.35L18.36 14.27L20.55 12.18Z"
        fill={fill}
      />
      <circle cx="19.08" cy="5.81" fill="#00f2fe" opacity="0.4" r="1.42" />
      <circle cx="19.08" cy="5.81" fill="#00f2fe" r="0.83" />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={id} x1="0" x2="24" y1="0" y2="24">
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="45%" stopColor="#38bdf8" />
          <stop offset="75%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#c084fc" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
