'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c] = useFillIds(TITLE, 3);
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
      <path
        clipRule="evenodd"
        d="M11.238 7.603a1.532 1.532 0 011.524 0l10.468 6a1.532 1.532 0 010 2.66l-10.468 6c-.472.27-1.052.27-1.524 0l-10.468-6a1.533 1.533 0 010-2.66l10.468-6zm-6.624 7.33L12 19.166l7.386-4.233L12 10.699l-7.386 4.234z"
        fill={a.fill}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M11.238 1.733a1.533 1.533 0 011.524 0l10.468 6a1.532 1.532 0 010 2.659l-10.468 6c-.472.27-1.052.27-1.524 0l-10.468-6a1.532 1.532 0 010-2.659l10.468-6zm-6.624 7.33L12 13.296l7.386-4.233L12 4.829 4.614 9.063z"
        fill={b.fill}
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M12.784 10.265L2.291 16.239.774 13.575l10.494-5.974 1.516 2.664z"
        fill={c.fill}
        fillRule="evenodd"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1=".182"
          x2="19.377"
          y1="14.907"
          y2="14.907"
        >
          <stop stopColor="#F9D100" />
          <stop offset="1" stopColor="#F97700" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="23.74"
          x2="4.519"
          y1="9.037"
          y2="9.037"
        >
          <stop stopColor="#F9D100" />
          <stop offset="1" stopColor="#F97700" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1=".182"
          x2="19.35"
          y1="14.907"
          y2="14.793"
        >
          <stop stopColor="#F9D100" />
          <stop offset="1" stopColor="#F97700" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
