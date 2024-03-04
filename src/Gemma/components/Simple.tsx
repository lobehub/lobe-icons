import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        d="M12 0a14.305 14.305 0 0 0 12 12 14.305 14.305 0 0 0-12 12A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0Zm.031 4.5A14.281 14.281 0 0 1 9 9a14.742 14.742 0 0 1-4.5 3.063 14.281 14.281 0 0 1 4.5 3.03 14.281 14.281 0 0 1 3.031 4.5 14.742 14.742 0 0 1 3.063-4.5 14.281 14.281 0 0 1 4.5-3.03A14.742 14.742 0 0 1 15.094 9a14.74 14.74 0 0 1-3.063-4.5Z"
        fillRule="evenodd"
      />
    </svg>
  );
});

export default Icon;
