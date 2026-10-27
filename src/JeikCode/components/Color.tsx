'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [bg, border, brand] = useFillIds(TITLE, 3);

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
      {/* 1. Base Icon Canvas with Smooth Rounded Corners */}
      <rect fill={bg.fill} height="24" rx="5.25" width="24" />
      {/* 2. Border Glow */}
      <rect
        fill="none"
        height="23.6"
        rx="5.05"
        stroke={border.fill}
        strokeWidth="0.18"
        width="23.6"
        x="0.2"
        y="0.2"
      />
      {/* 3. Ambient Background Light Bloom */}
      <circle cx="12" cy="11.25" fill="#38bdf8" opacity="0.16" r="6.1" />
      <circle cx="13.1" cy="13.1" fill="#a855f7" opacity="0.16" r="5.6" />
      {/* 4. Geometric Circuit Grid Accent Lines */}
      <g opacity="0.25" stroke="#38bdf8" strokeDasharray="0.3 0.6" strokeWidth="0.12">
        <line x1="4.5" x2="19.5" y1="7.5" y2="7.5" />
        <line x1="4.5" x2="19.5" y1="16.5" y2="16.5" />
        <line x1="7.5" x2="7.5" y1="4.5" y2="19.5" />
        <line x1="16.5" x2="16.5" y1="4.5" y2="19.5" />
      </g>
      {/* 5. Central Emblem: Stylized Futuristic 'J' + Code Quantum Node */}
      <path
        d="M8.91 6.94L15.09 6.94C15.56 6.94 15.94 7.31 15.94 7.78L15.94 8.34C15.94 8.81 15.56 9.19 15.09 9.19L13.03 9.19L13.03 13.59C13.03 15.75 11.34 17.44 9.19 17.44C7.03 17.44 5.53 15.75 5.53 14.06C5.53 13.5 6 13.03 6.56 13.03C7.12 13.03 7.59 13.5 7.59 14.06C7.59 14.81 8.25 15.38 9.19 15.38C10.12 15.38 10.97 14.62 10.97 13.59L10.97 9.19L8.91 9.19C8.44 9.19 8.06 8.81 8.06 8.34L8.06 7.78C8.06 7.31 8.44 6.94 8.91 6.94Z"
        fill={brand.fill}
      />
      <path
        d="M6.52 9.63L6.6 9.61L6.69 9.61L6.83 9.65L6.95 9.73L7.03 9.84L7.06 9.92L7.08 10L7.08 10.08L7.06 10.16L6.99 10.29L5.2 12L6.99 13.71L7.06 13.84L7.08 13.98L7.07 14.06L7.04 14.14L6.96 14.26L6.85 14.35L6.71 14.39L6.62 14.39L6.54 14.38L6.41 14.31L4.3 12.31L4.25 12.24L4.21 12.17L4.18 12.07L4.17 11.99L4.18 11.91L4.21 11.83L4.25 11.76L6.4 9.7Z"
        fill={brand.fill}
      />
      <path
        d="M17 10.27L16.96 10.2L16.93 10.12L16.92 10.04L16.93 9.96L16.95 9.88L16.99 9.81L17.04 9.74L17.1 9.69L17.23 9.62L17.35 9.61L17.5 9.64L17.62 9.71L19.71 11.71L19.76 11.77L19.8 11.85L19.82 11.93L19.83 12.01L19.8 12.15L19.76 12.23L19.71 12.29L17.62 14.29L17.5 14.36L17.35 14.39L17.23 14.38L17.1 14.31L17.04 14.26L16.99 14.19L16.95 14.12L16.93 14.04L16.92 13.96L16.93 13.88L16.96 13.8L17 13.73L18.8 12Z"
        fill={brand.fill}
      />
      {/* 6. Quantum Spark Node */}
      <circle cx="17.62" cy="6.94" fill="#00f2fe" opacity="0.45" r="1.12" />
      <circle cx="17.62" cy="6.94" fill="#00f2fe" r="0.66" />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={bg.id} x1="0" x2="24" y1="0" y2="24">
          <stop offset="0%" stopColor="#0b0f19" />
          <stop offset="50%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={border.id}
          x1="0"
          x2="24"
          y1="0"
          y2="24"
        >
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#818cf8" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id={brand.id} x1="0" x2="24" y1="0" y2="24">
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
