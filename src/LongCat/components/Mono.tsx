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
      viewBox="0.4000000059604645 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M1.157 20.5a.5.5 0 01-.482-.633L4.89 4.573a1 1 0 011.513-.57l5.549 3.638a1 1 0 001.095 0l5.572-3.64a1 1 0 011.512.572l4.195 15.295a.5.5 0 01-.483.632H18.49A6.215 6.215 0 0020 16.438v-.175a6.01 6.01 0 00-1.493-3.964l-.688-3.45a.433.433 0 00-.685-.262l-2.591 1.943a.737.737 0 01-.645.12 5.089 5.089 0 00-2.796 0 .737.737 0 01-.645-.12L7.864 8.586a.429.429 0 00-.679.265l-.667 3.605A5.29 5.29 0 005 16.166v.329c0 1.455.52 2.862 1.468 3.967l.032.038H1.157z" />
      <path d="M9.75 17.5h1.5V14H9.977l-.227 3.5zm5.5 0h-1.5V14h1.273l.227 3.5z" />
      <path d="M9.483 17.75H11.5v-4H9.743l-.26 4zm4.017 0h2.017l-.26-4H13.5v4zM11 17.5H9.75l.227-3.5h1.273v3.5H11zm4.234-.25l.016.25h-1.5V14h1.273l.21 3.25z" />
    </svg>
  );
});

export default Icon;
