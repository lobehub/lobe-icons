'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c, d, e] = useFillIds(TITLE, 5);
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
      <g clipPath={`url(#${a.id})`}>
        <mask
          height="24"
          id={b.id}
          maskUnits="userSpaceOnUse"
          style={{ maskType: 'luminance' }}
          width="24"
          x="0"
          y="0"
        >
          <path
            d="M18.821 0H5.179A5.18 5.18 0 0 0 0 5.179v13.642A5.18 5.18 0 0 0 5.179 24h13.642A5.18 5.18 0 0 0 24 18.821V5.179A5.18 5.18 0 0 0 18.821 0"
            fill="#fff"
          />
        </mask>
        <g mask={`url(#${b.id})`}>
          <path
            d="M18.821 0H5.179A5.18 5.18 0 0 0 0 5.179v13.642A5.18 5.18 0 0 0 5.179 24h13.642A5.18 5.18 0 0 0 24 18.821V5.179A5.18 5.18 0 0 0 18.821 0"
            fill={c.fill}
          />
          <g filter={`url(#${d.id})`}>
            <path
              d="M18.804 33.894a7.722 7.722 0 1 0 0-15.445 7.722 7.722 0 0 0 0 15.445"
              fill="#ffe355"
              fillOpacity=".49"
            />
          </g>
          <path
            d="M18.456 2.031c.235-.21.25-.219.422-.23.28-.02.535.115.971.512 1.019.925 2.437 2.827 3.318 4.452l.34.63.482.24c.464.235 1.226.715 1.544.973.144.12.165.122.315.064.675-.263 1.642.086 2.495.904.768.736 1.504 1.994 1.786 3.044.041.17.096.533.116.803.064.95-.24 1.708-.827 2.052-.12.069-.128.088-.125.386.027 1.423-.356 2.842-1.126 4.227-.87 1.555-2.418 3.163-4.513 4.679-1.126.819-3.788 2.37-4.991 2.915-2.884 1.298-5.196 1.795-7.204 1.55-1.197-.146-2.553-.613-3.355-1.156-.211-.146-.245-.155-.406-.109-.859.247-1.983-.26-2.938-1.32-.381-.424-.996-1.465-1.196-2.022-.461-1.303-.37-2.48.245-3.182.159-.181.164-.189.129-.493a12 12 0 0 1-.057-1.71l.02-.445-.666-1.18c-1.033-1.838-1.69-3.381-1.943-4.56-.133-.647-.125-.934.039-1.146.1-.128.428-.261.823-.335.994-.174 3.162-.016 5.575.41l.25.044.551-.488c.914-.81 1.522-1.263 2.642-1.962 1.166-.73 2.483-1.33 3.967-1.806l.475-.152.262-.687c.937-2.473 1.896-4.295 2.58-4.902m-7.845 12.67c-1.059.61-1.588.916-1.977 1.259a5.21 5.21 0 0 0-1.494 5.57c.165.491.47 1.02 1.082 2.08.61 1.058.917 1.587 1.26 1.976a5.21 5.21 0 0 0 5.571 1.493c.491-.165 1.02-.471 2.079-1.082l6.09-3.516c1.058-.611 1.587-.916 1.976-1.259a5.21 5.21 0 0 0 1.492-5.572c-.165-.491-.47-1.02-1.082-2.079-.611-1.058-.916-1.588-1.259-1.976a5.21 5.21 0 0 0-5.571-1.493c-.491.165-1.02.47-2.08 1.082z"
            fill={e.fill}
          />
          <path
            d="M13.882 18.795a1.203 1.203 0 0 0-2.083 1.203l1.295 2.243a1.203 1.203 0 1 0 2.083-1.203zm6.49-3.747a1.203 1.203 0 1 0-2.083 1.203l1.295 2.243a1.203 1.203 0 0 0 2.083-1.203z"
            fill="#fff"
          />
        </g>
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id={c.id} x1="12" x2="12" y1="0" y2="24">
          <stop stopColor="#0ec8a9" />
          <stop offset="1" stopColor="#01c886" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={e.id}
          x1="10.098"
          x2="21.325"
          y1="6.802"
          y2="26.248"
        >
          <stop stopColor="#fff" stopOpacity=".8" />
          <stop offset=".438" stopColor="#fff" />
        </linearGradient>
        <clipPath id={a.id}>
          <path d="M0 0h24v24H0z" fill="#fff" />
        </clipPath>
        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="37.445"
          id={d.id}
          width="37.446"
          x=".082"
          y="7.449"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur result="effect1_foregroundBlur_726_24" stdDeviation="5.5" />
        </filter>
      </defs>
    </svg>
  );
});

export default Icon;
