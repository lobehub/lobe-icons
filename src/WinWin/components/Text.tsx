'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

/**
 * WinWin 文字 logo 组件
 * 显示 "WinWin" 英文文字
 */
const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      fill="currentColor"
      height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 72 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <text
        fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
        fontSize="16"
        fontWeight="700"
        textAnchor="middle"
        x="36"
        y="17"
      >
        WinWin
      </text>
    </svg>
  );
});

export default Icon;
