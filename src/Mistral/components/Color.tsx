import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

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
      <title>{TITLE}</title>
      <g fill="none" fillRule="nonzero">
        <path
          d="M15 6v4h-2V6h2zm4-4v4h-2V2h2zM3 2H1h2zM1 2h2v20H1V2zm8 12h2v4H9v-4zm8 0h2v8h-2v-8z"
          fill="#000"
        ></path>
        <path d="M19 2h4v4h-4V2zM3 2h4v4H3V2z" fill="#F7D046"></path>
        <path d="M15 10V6h8v4h-8zM3 10V6h8v4H3z" fill="#F2A73B"></path>
        <path d="M3 14v-4h20v4z" fill="#EE792F"></path>
        <path d="M11 14h4v4h-4v-4zm8 0h4v4h-4v-4zM3 14h4v4H3v-4z" fill="#EB5829"></path>
        <path d="M19 18h4v4h-4v-4zM3 18h4v4H3v-4z" fill="#EA3326"></path>
      </g>
    </svg>
  );
});

export default Icon;
