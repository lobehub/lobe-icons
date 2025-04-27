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
      viewBox="0 0 44 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M20.595 3.347H2.024L2 6.198h7.983l-.748 1.704h-6.79V22h16.13c1.686 0 1.536-1.697 1.536-1.697v-12.4h-6.8l.598-1.746h6.686v-2.81zm-4.079 16.11H5.814V16.17h11.175v2.82s-.196.469-.473.469zm.454-6.003H5.813v-3.082H16.97v3.082zM34.53 3.422V2H31.11v1.352h-8.358v18.619h3.007V5.754h16.055V3.422h-7.286zm5.32 2.776h-2.937v1.077H30.87v-1.04h-2.783v1.04h-1.88l.037 2.109h1.843v3.96h10.165c1.41 0 1.597-1.482 1.597-1.482V9.383H42V7.274h-2.15V6.198zm-2.937 4.626s-.261.48-.597.48h-5.478V9.343h6.075v1.481zm-5.616 8.112c-.37.407-1.969.922-1.969.922h-3.12v2.078h4.236c1.264-.258 3.603-1.442 3.603-1.442.968.886 2.83 1.255 2.83 1.255h4.827v-2.074h-3.64c-.98-.146-1.86-.703-1.86-.703l5.5-3.148V14.12H26.619v2.112l4.678 2.704zm5.057-2.738l-2.676 1.406-2.453-1.406h5.129z" />
    </svg>
  );
});

export default Icon;
