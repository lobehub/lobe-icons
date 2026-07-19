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
      <path
        d="M18.194 8.491L15.651 5.3L8.598 5.3L5.144 8.568Q5.283 8.66 5.515 8.805L15.066 14.775Q15.54 15.072 15.665 15.617Q15.791 16.161 15.495 16.636Q15.198 17.11 14.653 17.235Q14.109 17.361 13.634 17.065L4.085 11.095Q2.699 10.23 2.377 9.264Q1.922 7.9 3.222 6.669L6.731 3.35Q7.492 2.6 8.58 2.6L15.679 2.6Q16.957 2.609 17.756 3.609L20.306 6.809Q20.654 7.246 20.591 7.802Q20.529 8.357 20.091 8.706Q19.654 9.054 19.098 8.991Q18.543 8.929 18.194 8.491Z"
        fill={fill}
      />
      <path
        d="M5.806 15.509L8.349 18.7L15.402 18.7L18.856 15.432Q18.717 15.34 18.485 15.195L8.934 9.225Q8.46 8.928 8.335 8.383Q8.209 7.839 8.505 7.364Q8.802 6.89 9.347 6.765Q9.891 6.639 10.366 6.935L19.915 12.905Q21.301 13.77 21.623 14.736Q22.078 16.1 20.778 17.331L17.269 20.65Q16.508 21.4 15.42 21.4L8.33 21.4Q7.058 21.4 6.244 20.391L3.694 17.191Q3.346 16.754 3.409 16.198Q3.471 15.643 3.909 15.294Q4.346 14.946 4.902 15.009Q5.457 15.071 5.806 15.509Z"
        fill={fill}
      />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={id} x1="4" x2="20" y1="4" y2="20">
          <stop stopColor="#67EDB1" />
          <stop offset=".48" stopColor="#2FD3E1" />
          <stop offset="1" stopColor="#2E68EA" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
