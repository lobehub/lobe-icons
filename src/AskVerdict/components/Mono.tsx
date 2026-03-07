'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';
import { PATHS } from './paths';

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
      <path d={PATHS.triangleLeft} fillOpacity="0.7" />
      <path d={PATHS.triangleRight} />
      <path d={PATHS.notch} fillOpacity="0.52" />
      <path d={PATHS.bandUpper} fillOpacity="0.82" />
      <path d={PATHS.bandLower} fillOpacity="0.62" />
    </svg>
  );
});

export default Icon;
