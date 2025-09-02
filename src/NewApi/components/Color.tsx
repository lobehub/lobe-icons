'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="none"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <defs>
        <linearGradient id="newapi-gradient-left" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#00D9FF" />
          <stop offset="100%" stopColor="#1EBDC2" />
        </linearGradient>
        <linearGradient id="newapi-gradient-right" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6EC7" />
          <stop offset="100%" stopColor="#C73E9B" />
        </linearGradient>
      </defs>
      <g clipRule="evenodd" fillRule="evenodd">
        {/* Left curved shape */}
        <path
          d="M12 2C9.5 2 7.2 2.8 5.3 4.2C3.4 5.6 2 7.7 1.3 10.1C0.6 12.5 0.7 15.1 1.6 17.4C2.5 19.7 4.1 21.6 6.2 22.8C8.3 24 10.8 24.4 13.2 23.9C11.5 23.5 10 22.5 8.9 21.1C7.8 19.7 7.2 17.9 7.2 16C7.2 13.6 8.2 11.3 9.9 9.6C11.6 7.9 13.9 6.9 16.3 6.9C16.8 6.9 17.3 6.9 17.8 7C16.5 4.2 14.4 2 12 2Z"
          fill="url(#newapi-gradient-left)"
        />
        {/* Right curved shape */}
        <path
          d="M12 22C14.5 22 16.8 21.2 18.7 19.8C20.6 18.4 22 16.3 22.7 13.9C23.4 11.5 23.3 8.9 22.4 6.6C21.5 4.3 19.9 2.4 17.8 1.2C15.7 0 13.2 -0.4 10.8 0.1C12.5 0.5 14 1.5 15.1 2.9C16.2 4.3 16.8 6.1 16.8 8C16.8 10.4 15.8 12.7 14.1 14.4C12.4 16.1 10.1 17.1 7.7 17.1C7.2 17.1 6.7 17.1 6.2 17C7.5 19.8 9.6 22 12 22Z"
          fill="url(#newapi-gradient-right)"
        />
        {/* Center star */}
        <path
          d="M12 9L13 11.5L15.5 12L13 13L12 15.5L11 13L8.5 12L11 11.5L12 9Z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
});

export default Icon;