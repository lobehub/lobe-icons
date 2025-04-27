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
      viewBox="0 0 111 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M46.495 2.027v19.965h5.656V2.027h-5.656zM2 2v19.992h5.706V6.48l4.452.015a4.088 4.088 0 013.183 1.101c.894.951 1.26 2.483 1.26 5.287V22h5.529V10.949c0-7.883-5.035-8.946-9.972-8.946L2 2zm53.604.027v19.965h9.174c4.882 0 6.482-.81 8.208-2.626a11.156 11.156 0 002.008-7.136c.109-2.423-.53-4.82-1.831-6.869-2.095-2.788-5.114-3.332-9.621-3.332l-7.938-.002zm5.61 4.347h2.432c3.527 0 5.81 1.58 5.81 5.678 0 4.097-2.289 5.679-5.81 5.679h-2.432V6.374zM38.34 2.027L33.62 17.845 29.096 2.027h-6.102l6.46 19.965h8.151l6.51-19.965h-5.774zm39.285 19.965h5.657V2.03h-5.659l.002 19.963zm15.86-19.957l-7.898 19.95h5.578l1.25-3.526h9.346l1.183 3.526H109l-7.958-19.952-7.555.002zm3.673 3.64l3.427 9.346h-6.96l3.533-9.346z" />
    </svg>
  );
});

export default Icon;
