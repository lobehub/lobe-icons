'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 125 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M2 23.503V.298h7.668c4.017 0 7.636 2.42 7.636 7.26 0 4.972-3.619 7.757-7.636 7.757H5.884v8.188H2zm3.884-11.835h3.784c1.727 0 3.752-1.226 3.752-3.845 0-2.652-2.025-3.878-3.752-3.878H5.884v7.723zM27.557 24c-4.846 0-8.564-3.978-8.564-8.818 0-4.873 3.718-8.85 8.564-8.85 2.69 0 4.714 1.425 5.976 3.414V6.829h3.651v16.674h-3.651v-2.917C32.27 22.575 30.246 24 27.557 24zm-4.913-8.818c0 2.95 2.357 5.172 5.445 5.172 3.087 0 5.444-2.188 5.444-5.172 0-3.016-2.357-5.204-5.444-5.204-3.088 0-5.445 2.22-5.445 5.204zm18.51 8.32V6.83h3.619v2.718c.863-1.757 2.39-2.95 4.98-2.95v3.68c-2.69-.167-4.98 1.06-4.98 4.905v8.32h-3.619zm18.66.498c-4.846 0-8.565-3.978-8.565-8.818 0-4.873 3.718-8.85 8.565-8.85 2.69 0 4.714 1.425 5.976 3.414V6.829h3.651v16.674H65.79v-2.917C64.528 22.575 62.503 24 59.814 24zm-4.913-8.818c0 2.95 2.357 5.172 5.444 5.172 3.088 0 5.445-2.188 5.445-5.172 0-3.016-2.357-5.204-5.445-5.204-3.087 0-5.444 2.22-5.444 5.204zM79.718 24c-3.087 0-6.24-1.392-7.303-3.348l2.59-2.155c.796 1.028 2.556 1.956 4.713 1.956 1.162 0 2.855-.398 2.855-1.823 0-1.425-1.892-1.459-3.751-1.89-4.017-.895-5.677-2.353-5.677-5.105 0-3.414 2.922-5.304 6.241-5.304a9.55 9.55 0 015.943 2.023l-1.76 2.85c-.963-.762-2.888-1.326-4.183-1.326-1.328 0-2.556.597-2.556 1.658 0 1.06.963 1.392 2.59 1.79 2.655.63 6.838 1.028 6.838 5.105 0 4.144-3.585 5.569-6.54 5.569zm17.605 0c-4.847 0-8.565-3.978-8.565-8.818 0-4.873 3.718-8.85 8.565-8.85 2.689 0 4.714 1.425 5.975 3.414V6.829h3.652v16.674h-3.652v-2.917C102.037 22.575 100.012 24 97.323 24zm-4.913-8.818c0 2.95 2.357 5.172 5.444 5.172 3.087 0 5.444-2.188 5.444-5.172 0-3.016-2.357-5.204-5.444-5.204-3.087 0-5.444 2.22-5.444 5.204zm18.941 8.32V6.83h3.618v16.674h-3.618zm-.431-21.281c0-1.227.995-2.221 2.224-2.221 1.228 0 2.224.994 2.224 2.221a2.223 2.223 0 01-2.224 2.221 2.222 2.222 0 01-2.224-2.221zm8.428 21.282V.298H123v23.205h-3.652z" />
    </svg>
  );
});

export default Icon;
