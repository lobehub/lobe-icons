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
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M17.157.043c-9.388 0-17 7.612-17 17 0 5.126 2.27 9.721 5.856 12.84l8.41-17.246h9.408L13.577 33.663a17.03 17.03 0 003.58.378c9.389 0 17-7.612 17-17 0-9.389-7.611-17-17-17v.002z" transform="scale(.68571)"></path><path d="M6.013 29.88l9.278-19.025c.025-.053.05-.107.08-.16l.126-.263h.006a9.767 9.767 0 018.624-5.179c4.06 0 7.541 2.478 9.019 6.002C30.78 4.715 24.513.041 17.157.041c-9.388 0-17 7.611-17 17 0 5.125 2.27 9.72 5.856 12.838z" transform="scale(.68571)"></path><defs><linearGradient id="a" x1="19.642" x2="18.313" y1="7.033" y2="31.066" gradientUnits="userSpaceOnUse"><stop offset=".313" stop-color="#9EC0E0"></stop><stop offset="1" stop-color="#fff"></stop></linearGradient><linearGradient id="b" x1="20.036" x2="8.236" y1="6.167" y2="25.355" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"></stop><stop offset="1" stop-color="#BCD5EC"></stop></linearGradient></defs>
    </svg>
  );
});

export default Icon;