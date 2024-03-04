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
      <g fill="none" fillRule="evenodd">
        <path d="M0 10h4.8v5H0z" fill="#FFFF67"></path>
        <path d="M4.8 10h4.8v5H4.8z" fill="#43FFFF"></path>
        <path d="M9.6 10h4.8v5H9.6z" fill="#51DA4B"></path>
        <path d="M14.4 10h4.8v5h-4.8z" fill="#FF6E3D"></path>
        <path d="M19.2 10H24v5h-4.8z" fill="#3C46FF"></path>
      </g>
    </svg>
  );
});

export default Icon;
