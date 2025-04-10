'use client';

import { useThemeMode } from 'antd-style';
import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ color, size = '1em', style, ...rest }) => {
  const [a, b, c] = useFillIds(TITLE + color, 3);
  const { isDarkMode } = useThemeMode();
  const fill = isDarkMode || color === '#fff' ? '#fff' : '#000';
  const fillSecondary = isDarkMode || color === '#fff' ? '#E4E4E4' : '#555';

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
      <path d="M11.925 24l10.425-6-10.425-6L1.5 18l10.425 6z" fill={a.fill} />
      <path d="M22.35 18V6L11.925 0v12l10.425 6z" fill={b.fill} />
      <path d="M11.925 0L1.5 6v12l10.425-6V0z" fill={c.fill} />
      <path d="M22.35 6L11.925 24V12L22.35 6z" fill={fillSecondary} />
      <path d="M22.35 6l-10.425 6L1.5 6h20.85z" fill={fill} />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="11.925"
          x2="11.925"
          y1="12"
          y2="24"
        >
          <stop offset=".16" stopColor={fill} stopOpacity=".39" />
          <stop offset=".658" stopColor={fill} stopOpacity=".8" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="22.35"
          x2="11.925"
          y1="6.037"
          y2="12.15"
        >
          <stop offset=".182" stopColor={fill} stopOpacity=".31" />
          <stop offset=".715" stopColor={fill} stopOpacity="0" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="11.925"
          x2="1.5"
          y1="0"
          y2="18"
        >
          <stop stopColor={fill} stopOpacity=".6" />
          <stop offset=".667" stopColor={fill} stopOpacity=".22" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
