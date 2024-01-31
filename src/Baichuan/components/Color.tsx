import { forwardRef } from 'react';

import type { IconType } from '@/types';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M7.333 2h-3.2l-2 4.333V17.8L0 22h5.2l2.028-4.2L7.333 2z" fill="url(#a)"></path>
      <path d="M14.667 2h-5.2v20h5.2V2z" fill="url(#b)"></path>
      <path d="M16.8 7.733H22V22h-5.2V7.733z" fill="url(#c)"></path>
      <path d="M22 2h-5.2v4.133H22V2z" fill="url(#d)"></path>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="a" x1="0" x2="24.091" y1="2" y2="23.818">
          <stop stopColor="#FEC13E"></stop>
          <stop offset="1" stopColor="#FF6933"></stop>
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="b" x1="0" x2="24.091" y1="2" y2="23.818">
          <stop stopColor="#FEC13E"></stop>
          <stop offset="1" stopColor="#FF6933"></stop>
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="c" x1="0" x2="24.091" y1="2" y2="23.818">
          <stop stopColor="#FEC13E"></stop>
          <stop offset="1" stopColor="#FF6933"></stop>
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="d" x1="0" x2="24.091" y1="2" y2="23.818">
          <stop stopColor="#FEC13E"></stop>
          <stop offset="1" stopColor="#FF6933"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
