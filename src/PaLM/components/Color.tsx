'use client';

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
      <path
        d="M12 22.926c.928 0 1.679-.752 1.679-1.68V6.696h-3.358v14.552c0 .927.751 1.679 1.679 1.679z"
        fill="#F9AB00"
      ></path>
      <path
        d="M18.69 12.005A5.819 5.819 0 0012 10.904l7.188 7.188c.296.296.807.179.933-.22a5.815 5.815 0 00-1.431-5.867z"
        fill="#5BB974"
      ></path>
      <path
        d="M5.31 12.005A5.819 5.819 0 0112 10.904l-7.188 7.188a.562.562 0 01-.933-.22 5.815 5.815 0 011.431-5.867z"
        fill="#129EAF"
      ></path>
      <path
        d="M18.157 6.426c-2.86 0-5.288 1.875-6.157 4.478h11.367a.629.629 0 00.565-.908c-1.08-2.12-3.26-3.57-5.775-3.57z"
        fill="#AF5CF7"
      ></path>
      <path
        d="M13.188 3.384c-2.023 2.024-2.414 5.064-1.188 7.52l8.038-8.039a.629.629 0 00-.242-1.042c-2.264-.735-4.83-.217-6.608 1.561z"
        fill="#FF8BCB"
      ></path>
      <path
        d="M10.812 3.384c2.023 2.024 2.414 5.064 1.188 7.52L3.962 2.865a.629.629 0 01.242-1.042c2.264-.735 4.83-.217 6.608 1.561z"
        fill="#FA7B17"
      ></path>
      <path
        d="M5.843 6.426c2.86 0 5.288 1.875 6.157 4.478H.633a.629.629 0 01-.565-.908c1.08-2.12 3.26-3.57 5.775-3.57z"
        fill="#4285F4"
      ></path>
    </svg>
  );
});

export default Icon;