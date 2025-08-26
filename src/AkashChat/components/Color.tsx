'use client';

import { memo } from 'react';

import { useFillId } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);
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
      <path d="M15.902 14.836l3.93 6.914h-7.934L7.93 14.836h7.972z" fill={fill} />
      <path d="M19.828 21.754l3.96-6.918L15.86 1H7.93l11.898 20.754z" fill="#FF414C" />
      <path d="M3.965 7.914h7.93L3.969 21.75 0 14.836l3.965-6.922z" fill="#FF414C" />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={id}
          x1="13.877"
          x2="18.518"
          y1="19.997"
          y2="14.799"
        >
          <stop stopColor="#FF414C" />
          <stop offset="1" stopColor="#FF414C" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
