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
      <path d="M16.698 0h.177c.636 0 1.236.136 1.78.402.367.209.678.467.94.776.43.539.742 1.178.918 1.918.163.646.24 1.365.247 2.119.007.503 0 .998-.02 1.48 0 .014.027 0 .091-.029.367-.187.72-.395 1.06-.625.325-.144.636-.144.897-.014.141.057.212.215.212.503 0 .359-.064.675-.184.97-.17.43-.445.825-.833 1.17a4.096 4.096 0 01-1.258.754c-.056.022-.092.058-.092.1l-.17 1.768a28.1 28.1 0 01-.656 3.807 23.267 23.267 0 01-1.23 3.304 10.034 10.034 0 01-1.752 2.658 8.75 8.75 0 01-2.006 1.61 9.225 9.225 0 01-2.876 1.077c-1.017.215-2.07.287-3.144.237a7.018 7.018 0 01-2.995-.79 5.155 5.155 0 01-1.293-1.042 5.122 5.122 0 01-1.053-2.414 7.58 7.58 0 01-.12-1.149 3.788 3.788 0 01.07-1.15c.199-1.048.446-2.118.736-3.217l1.08-4.382a36.33 36.33 0 00.41-1.94c.184-.933.24-1.824.163-2.657a2.73 2.73 0 00-.445-1.394c-.205-.23-.445-.359-.72-.359a1.299 1.299 0 00-.884.273l-1.328.97a1.539 1.539 0 01-.806.309c-.204.014-.353-.03-.452-.13-.092-.093-.141-.244-.155-.452-.05-.848.17-1.595.657-2.241a4.38 4.38 0 011.067-.963A5.724 5.724 0 014.645.395C5.232.251 5.868.208 6.553.237c.685.05 1.293.259 1.837.632.381.287.706.647.953 1.063.615.977.89 2.076.834 3.283a15.265 15.265 0 01-.46 3.434l-1.073 4.669a39.637 39.637 0 00-.495 2.6 12.27 12.27 0 00-.056 2.392c.056.503.29.912.692 1.235.226.173.495.288.792.36.268.057.565.093.904.1a4.932 4.932 0 002.875-.948c.424-.302.82-.646 1.187-1.034a9.423 9.423 0 001.413-2.04 16.146 16.146 0 001.343-3.85 35.7 35.7 0 00.424-2.249 6.548 6.548 0 01-2.862-.797 4.711 4.711 0 01-1.024-.848 4.72 4.72 0 01-.834-1.278 6.2 6.2 0 01-.494-2.35 5.136 5.136 0 01.211-1.81A4.276 4.276 0 0113.992.934c.431-.36.933-.61 1.498-.762.389-.1.791-.158 1.201-.165L16.698 0zm.382 2.766a.448.448 0 00-.417.23c-.036.057-.057.114-.085.179l-.057.187-.028.2v.216a4 4 0 00.021.431c.015.13.036.273.071.395l.042.216c.022.072.036.144.071.215.014.072.043.137.07.202l.085.193.106.187c.036.065.078.115.12.173l.142.165.155.158c.1.1.212.187.311.266.1.079.212.143.325.208a51.6 51.6 0 00.057-1.81v-.36c0-.114-.021-.23-.036-.337l-.05-.323-.07-.31a.593.593 0 00-.07-.171l-.113-.194a.728.728 0 00-.389-.302l-.17-.029h-.084l-.007.015z" />
    </svg>
  );
});

export default Icon;
