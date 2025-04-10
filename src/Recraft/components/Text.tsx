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
      viewBox="0 0 89 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M87.163 11.996l-2.881-9.99h-9.784l-.807 2.779C72.214 3.091 69.906 2 67.31 2c-1.544 0-2.798 3.217-2.798 7.185v.406l-4.179-7.585h-2.282l-4.151 14.397h-7.439c4.44-.018 8.032-3.228 8.032-7.185 0-3.957-3.612-7.185-8.069-7.185-1.545 0-2.798 3.217-2.798 7.185 0 .993.078 1.939.22 2.8h-1.183v-.014h-1.62v.013c0 4.74-1.27 8.581-2.837 8.581-1.567 0-2.837-3.842-2.837-8.581 0-4.74 1.27-8.582 2.837-8.582 1.035 0 1.94 1.677 2.436 4.182h1.566c-.726-3.308-2.245-5.585-4.002-5.585-3.634 0-6.786 2.195-8.348 5.405-.74-3.21-2.237-5.405-3.961-5.405-3.932 0-7.299 2.569-8.699 6.213-.528-3.513-3.912-6.224-8.007-6.224-1.548 0-2.802 3.218-2.802 7.186 0 .993.079 1.938.22 2.799H3.87L1 21.989h8.194v-5.597l3.156 5.597h8.227l-2.525-4.48h.002c1.68 2.705 4.565 4.49 7.842 4.49h.002c1.724 0 3.22-2.194 3.961-5.404 1.562 3.21 4.713 5.404 8.346 5.405h.002l.038-.001h8.183v-5.597L49.58 22h8.216l-.015-.027h2.393v-4.264h2.057l1.229 4.265h7.878l-2.416-4.385h3.687l-1.27 4.384 11.553.002-5.124-17.758 9.395 7.78zm-77.971 3.08c-.81 0-1.466-2.628-1.466-5.87 0-3.24.656-5.869 1.466-5.869.81 0 1.466 2.628 1.466 5.87 0 3.241-.656 5.869-1.466 5.869zm.037 1.316c3.22-.013 5.994-1.701 7.279-4.134.033 1.482.37 2.883.947 4.138h-.03l-.003-.004H9.23zM25.898 3.434c1.417 0 2.59 3.143 2.802 7.25h-5.604c.211-4.107 1.385-7.25 2.802-7.25zm2.438 12.97c-.495 2.511-1.401 4.194-2.438 4.194-1.567 0-2.836-3.841-2.837-8.58h5.754c0 1.573.343 3.061.953 4.385h-1.432zm18.09-1.317c-.809 0-1.464-2.628-1.464-5.87 0-3.24.656-5.868 1.464-5.868.808 0 1.463 2.628 1.463 5.869 0 3.241-.655 5.869-1.463 5.869zm13.748 1.289v-5.808l1.674 5.808h-1.674zm11.226-4.39h-5.565l.013-2.8c0-3.242.656-5.87 1.464-5.87.808 0 1.464 2.628 1.464 5.87h6.267l-1.775 6.124-1.87-3.323h.002zm3.914-3.734a6.673 6.673 0 00-1.212-2.95l2.383-1.093-1.171 4.044v-.001z" />
    </svg>
  );
});

export default Icon;
