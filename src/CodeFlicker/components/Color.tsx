'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c] = useFillIds(TITLE, 3);
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M4.707 6.24V3.5H0v16.977h4.707v-2.74H2.94V6.24h1.766z" />
      <path
        d="M20.868 3.5h-1.575v2.74h1.775v11.497h-1.775v2.74H24V3.5h-3.132zM13.22 3.5l-.55 3.082H9.623l.541-3.082h3.057zM14.395 8.398l-2.133 12.08H9.213l2.125-12.08h3.057z"
        fill="#32EDDA"
      />
      <path d="M14.395 8.398l-2.133 12.08h7.031v-2.741h1.775V8.398h-6.673z" fill={a.fill} />
      <path d="M9.622 6.583l1.716 1.816h3.057l-1.724-1.816H9.62z" fill={b.fill} />
      <path d="M13.22 3.5h6.073v2.74h1.775v2.158h-6.673L12.67 6.582l.55-3.082z" fill={c.fill} />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="10.505"
          x2="20.36"
          y1="13.772"
          y2="14.838"
        >
          <stop stopColor="#32EDDA" />
          <stop offset=".09" stopColor="#48EEDD" stopOpacity=".89" />
          <stop offset=".43" stopColor="#95F5EB" stopOpacity=".51" />
          <stop offset=".7" stopColor="#CEFAF6" stopOpacity=".24" />
          <stop offset=".9" stopColor="#F1FDFC" stopOpacity=".07" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="11.854"
          x2="12.321"
          y1="6.258"
          y2="9.998"
        >
          <stop offset=".01" stopColor="#32EDDA" />
          <stop offset=".06" stopColor="#4CEFDE" stopOpacity=".87" />
          <stop offset=".15" stopColor="#76F2E6" stopOpacity=".67" />
          <stop offset=".25" stopColor="#9AF6EC" stopOpacity=".49" />
          <stop offset=".35" stopColor="#B9F8F2" stopOpacity=".34" />
          <stop offset=".45" stopColor="#D3FBF7" stopOpacity=".21" />
          <stop offset=".56" stopColor="#E6FCFA" stopOpacity=".12" />
          <stop offset=".68" stopColor="#F4FEFD" stopOpacity=".05" />
          <stop offset=".82" stopColor="#FCFEFE" stopOpacity=".01" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="13.112"
          x2="20.41"
          y1="2.9"
          y2="8.873"
        >
          <stop stopColor="#32EDDA" />
          <stop offset=".1" stopColor="#5BF0E1" stopOpacity=".8" />
          <stop offset=".23" stopColor="#86F4E9" stopOpacity=".59" />
          <stop offset=".35" stopColor="#ABF7EF" stopOpacity=".41" />
          <stop offset=".48" stopColor="#C9FAF5" stopOpacity=".26" />
          <stop offset=".6" stopColor="#E1FCF9" stopOpacity=".15" />
          <stop offset=".73" stopColor="#F1FDFC" stopOpacity=".06" />
          <stop offset=".86" stopColor="#FBFEFE" stopOpacity=".02" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
