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
      <g clipPath="url(#a)">
        <path
          d="M9.815 4.093a.789.789 0 011.578 0v11.65a.652.652 0 101.304 0V4.093a2.093 2.093 0 00-4.186 0v14.168a.766.766 0 11-1.533 0V9.177a2.07 2.07 0 10-4.141 0v3.843a.766.766 0 11-1.532 0v-1.393a.652.652 0 10-1.305 0v1.393a2.07 2.07 0 104.142 0V9.177a.766.766 0 011.532 0v9.084a2.07 2.07 0 104.141 0V4.093z"
          fill="url(#b)"
        ></path>
        <path
          d="M15.49 4.093a.789.789 0 011.577 0v12.639a2.048 2.048 0 104.096 0V9.177a.766.766 0 111.532 0v6.634a.652.652 0 001.305 0V9.177a2.07 2.07 0 10-4.142 0v7.555a.744.744 0 01-1.487 0V4.093a2.093 2.093 0 10-4.186 0v16.08a.744.744 0 11-1.488 0v-1.956a.652.652 0 00-1.304 0v1.956a2.048 2.048 0 104.096 0V4.093z"
          fill="url(#c)"
        ></path>
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="b"
          x1="0"
          x2="24.023"
          y1="12.122"
          y2="12.122"
        >
          <stop stopColor="#E2167E"></stop>
          <stop offset="1" stopColor="#FE603C"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="c"
          x1="0"
          x2="24.023"
          y1="12.122"
          y2="12.122"
        >
          <stop stopColor="#E2167E"></stop>
          <stop offset="1" stopColor="#FE603C"></stop>
        </linearGradient>
        <clipPath id="a">
          <path d="M0 0h24v24H0z" fill="#fff"></path>
        </clipPath>
      </defs>
    </svg>
  );
});

export default Icon;
