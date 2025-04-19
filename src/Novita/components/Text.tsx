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
      viewBox="0 0 92 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path
        clipRule="evenodd"
        d="M68.236 18.3h5.11v3.228H69.29c-2.838 0-4.623-1.56-4.623-4.466V8.476h-2.892V5.22h2.892l.838-4.279h2.704v4.279h5.136v3.256h-5.11v9.822zM7.84 0l7.434 16.576h.217V0h3.865v21.528h-5.84L6.083 4.952h-.216v16.576H2V0h5.84zm21.438 21.851c-4.731 0-7.759-3.31-7.759-8.45 0-5.14 2.974-8.503 7.76-8.503 4.784 0 7.704 3.229 7.704 8.504 0 5.274-2.974 8.45-7.705 8.45zm0-3.229c2.11 0 3.866-.727 3.92-2.799V10.98c0-2.126-1.784-2.853-3.92-2.853s-3.974.727-3.974 2.853v4.843c.054 2.1 1.865 2.8 3.974 2.8zM41.12 5.194l4.217 12.916h.216L49.77 5.194h3.893L47.85 21.5h-4.813L37.252 5.194H41.12zm14.545.027h3.569v16.307h-3.57V5.221zM55.447 0h4.001v3.068h-4V0zm26.657 21.878c-4.353 0-7.137-3.31-7.137-8.476 0-5.167 2.73-8.477 7.137-8.477 2.055 0 3.731.807 4.732 2.314h.216l.703-2.018h2.703v16.307h-2.703l-.703-1.965h-.216c-1.082 1.426-2.893 2.314-4.732 2.314v.001zm.73-3.256c2.136 0 4-.673 4.054-2.799V10.98c0-2.18-1.947-2.8-4.135-2.8-2.19 0-4.001.674-4.001 2.8v4.843c.054 2.153 1.92 2.8 4.082 2.8z"
      />
    </svg>
  );
});

export default Icon;
