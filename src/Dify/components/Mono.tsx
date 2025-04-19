'use client';

import { useThemeMode } from 'antd-style';
import { memo } from 'react';

import { useFillId } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, color, ...rest }) => {
  const { fill, id } = useFillId(TITLE);
  const { isDarkMode } = useThemeMode();
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      style={{
        flex: 'none',
        lineHeight: 1,
        ...style,
      }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <clipPath id={id}>
        <path d="M1 0h10.286c6.627 0 12 5.373 12 12s-5.373 12-12 12H1V0z" />
      </clipPath>
      <foreignObject
        clipPath={fill}
        height="24"
        style={{
          background: `conic-gradient(from 180deg at 50% 50%, transparent, ${color || (isDarkMode ? '#fff' : '#000')})`,
        }}
        width="24"
      />
    </svg>
  );
});

export default Icon;
