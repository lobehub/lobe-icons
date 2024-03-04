import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 26 25"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M12.57.982H.908v11.386h11.664V.982z"></path>
      <path d="M25.462.982H13.8v11.386h11.663V.982z"></path>
      <path d="M12.57 13.565H.908V24.95h11.664V13.565z"></path>
      <path d="M25.463 13.565H13.8V24.95h11.663V13.565z"></path>
    </svg>
  );
});

export default Icon;
