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
      <defs>
        <linearGradient id={a.id} x1="31.373%" x2="61.365%" y1="95.551%" y2="-.348%">
          <stop offset="0%" stopColor="#06F" />
          <stop offset="20%" stopColor="#1677FF" />
          <stop offset="100%" stopColor="#04A6FF" />
        </linearGradient>
        <linearGradient id={b.id} x1="4.366%" x2="94.359%" y1="65.982%" y2="32.918%">
          <stop offset="0%" stopColor="#06F" />
          <stop offset="20%" stopColor="#1677FF" />
          <stop offset="100%" stopColor="#04A6FF" />
        </linearGradient>
        <linearGradient id={c.id} x1="56.255%" x2="45.986%" y1="99.257%" y2="1.384%">
          <stop offset="0%" stopColor="#06F" />
          <stop offset="20%" stopColor="#1677FF" />
          <stop offset="100%" stopColor="#04A6FF" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="nonzero">
        <path
          d="M9.797 6.282a.451.451 0 01-.336-.315 1.019 1.019 0 010-.505c.156-.86.3-1.725.501-2.577.14-.7.42-1.367.823-1.96.305-.431.75-.746 1.262-.89.877-.217 1.24.629.937 1.348-.259.593-.877.914-1.334 1.348-.835.795-1.096 2.14-1.336 3.212a.427.427 0 01-.186.277.437.437 0 01-.331.062z"
          fill={a.fill}
          transform="translate(3)"
        />
        <path
          d="M6.334 4.672c.33-.121.682.146.946.297.278.145.587.219.901.214.231.01.466 0 .688.018 4.098.176 7.484 3.22 8.05 7.237.565 4.016-1.852 7.859-5.745 9.134-3.894 1.276-8.153-.38-10.126-3.935A8.339 8.339 0 013.133 7.081c.348-.278.716-.53 1.102-.755a8.404 8.404 0 001.318-.79c.28-.243.45-.742.781-.864zm4.406 2.15c-2.841.003-4.898 2.533-4.628 5.642.27 3.109 2.781 5.641 5.613 5.665 2.832.024 4.932-2.512 4.658-5.644-.273-3.133-2.802-5.666-5.643-5.663zm.357.57a4.707 4.707 0 013.304 1.446 5.703 5.703 0 011.643 3.49 4.841 4.841 0 01-1.141 3.705v.015a3.923 3.923 0 01-2.808 1.303 4.664 4.664 0 01-3.367-1.387 5.678 5.678 0 01-1.71-3.518 4.832 4.832 0 011.14-3.753 3.923 3.923 0 012.813-1.3h.126z"
          fill={b.fill}
          transform="translate(3)"
        />
        <path
          d="M2.346 2.054a1.26 1.26 0 01.384-.594.842.842 0 011.165.11c.694.82.169 2.078.142 3.02.013.805.208 1.597.57 2.318.084.134.147.279.186.43a.539.539 0 01-.3.577c-.345.17-.568-.19-.709-.446-.324-.6-.617-1.216-.877-1.846a8.698 8.698 0 01-.618-1.987 7.523 7.523 0 01-.051-.37 3.717 3.717 0 01-.024-.34 2.506 2.506 0 01.132-.872z"
          fill={c.fill}
          transform="translate(3)"
        />
      </g>
    </svg>
  );
});

export default Icon;
