'use client';

import { memo } from 'react';

import { useFillId } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';
import { PATHS } from './paths';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const { id } = useFillId(TITLE);
  const gradientId = `${id}-gold`;

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
      <defs>
        <linearGradient id={gradientId} x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FAD460" />
          <stop offset="45%" stopColor="#E8A317" />
          <stop offset="100%" stopColor="#B8751A" />
        </linearGradient>
      </defs>
      <path d={PATHS.triangleLeft} fill={`url(#${gradientId})`} fillOpacity="0.7" />
      <path d={PATHS.triangleRight} fill={`url(#${gradientId})`} />
      <path d={PATHS.notch} fill="#0a0800" fillOpacity="0.52" />
      <path d={PATHS.bandUpper} fill={`url(#${gradientId})`} fillOpacity="0.82" />
      <path d={PATHS.bandLower} fill={`url(#${gradientId})`} fillOpacity="0.62" />
    </svg>
  );
});

export default Icon;
