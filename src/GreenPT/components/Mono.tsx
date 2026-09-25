'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 86 86"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M43 0C19.252 0 0 19.252 0 43s19.252 43 43 43 43-19.252 43-43S66.748 0 43 0Zm1.362 66.507c-12.864 0-23.292-10.493-23.292-23.435 0-12.943 10.428-23.435 23.292-23.435 12.863 0 23.291 10.492 23.291 23.435 0 12.942-10.428 23.435-23.291 23.435Z" />
    </svg>
  );
});

export default Icon;
