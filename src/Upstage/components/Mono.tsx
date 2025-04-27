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
      <path d="M19.763 0l-.373 1.297h2.594L22.354 0h-2.591z" />
      <path d="M16.192 2.27l-.376 1.298h5.52l.37-1.298h-5.514z" />
      <path d="M12.897 4.54l-.377 1.298h8.167l.37-1.297h-8.16z" />
      <path d="M2.85 6.81l-.377 1.298h17.565l.37-1.297H2.85z" />
      <path d="M3.884 9.081l-.376 1.297H19.39l.37-1.297H3.883z" />
      <path d="M4.088 24l.376-1.297H1.866L1.5 24h2.588z" />
      <path d="M7.662 21.73l.376-1.298H2.515L2.15 21.73h5.513z" />
      <path d="M10.957 19.46l.377-1.298h-8.17l-.367 1.297h8.16z" />
      <path d="M21.005 17.19l.376-1.298H3.812l-.366 1.297h17.559z" />
      <path d="M19.967 14.919l.376-1.297H4.461l-.366 1.297h15.872z" />
      <path d="M18.787 12.649l.376-1.298H4.26l-.366 1.298h14.893z" />
    </svg>
  );
});

export default Icon;
