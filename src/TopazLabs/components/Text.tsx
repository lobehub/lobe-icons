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
      viewBox="0 0 125 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <g clipPath="url(#a)">
        <path d="M16.32 4.698V2H2v2.698h5.811v15.566h2.699V4.698h5.81zM72.567 3.868h2.698v13.698h7.68v2.699H72.566V3.868z" />
        <path
          clipRule="evenodd"
          d="M12.689 14.038a6.538 6.538 0 1113.075 0 6.538 6.538 0 01-13.075 0zm6.538-3.84a3.84 3.84 0 100 7.68 3.84 3.84 0 000-7.68zM30.227 24v-4.662a5.86 5.86 0 003.638 1.238c3.548 0 6.33-2.98 6.33-6.538 0-3.559-2.782-6.538-6.33-6.538a5.86 5.86 0 00-3.638 1.238v-.927h-2.698v16.19h2.698zm3.535-13.802c-1.955 0-3.736 1.667-3.736 3.84s1.781 3.84 3.736 3.84c1.954 0 3.736-1.667 3.736-3.84s-1.782-3.84-3.736-3.84zM51.604 8.733A5.86 5.86 0 0047.972 7.5c-3.547 0-6.33 2.98-6.33 6.538 0 3.558 2.783 6.538 6.33 6.538a5.86 5.86 0 003.632-1.233v.921h2.698V7.811h-2.698v.922zm.208 5.305c0-2.173-1.775-3.84-3.73-3.84-1.954 0-3.742 1.667-3.742 3.84s1.788 3.84 3.743 3.84c1.954 0 3.729-1.667 3.729-3.84zM89.69 7.5a5.86 5.86 0 013.632 1.233V7.81h2.698v12.453h-2.698v-.921a5.861 5.861 0 01-3.633 1.233c-3.547 0-6.33-2.98-6.33-6.538 0-3.559 2.783-6.538 6.33-6.538zm.11 2.698c1.954 0 3.73 1.667 3.73 3.84s-1.776 3.84-3.73 3.84c-1.955 0-3.743-1.667-3.743-3.84s1.788-3.84 3.743-3.84z"
        />
        <path d="M67.585 9.887V7.812h-11v2.698h6.896l-7.103 7.679v2.076h11v-2.699h-6.896l7.103-7.679zM117.233 7.475c-1.252 0-2.571.21-3.536 1.002-1.008.826-1.679 2.134-1.263 3.691.336 1.256 1.165 2.014 2.097 2.468.851.414 1.842.599 2.619.744l.018.003c.867.162 1.506.283 2.002.502.425.189.606.39.696.685.094.306-.082.683-.385.922-.453.358-1.214.625-2.041.625-1.402 0-2.495-.786-3.011-1.874l-2.428 1.114c.926 1.952 2.925 3.193 5.439 3.193 1.336 0 2.925-.211 3.928-1.004 1.044-.825 1.752-2.158 1.272-3.733-.374-1.225-1.452-1.924-2.369-2.33-.798-.354-1.725-.526-2.468-.664l-.137-.025c-.85-.159-1.476-.291-1.948-.52-.395-.193-.61-.36-.707-.726-.1-.369.017-.732.4-1.047.427-.349 1.117-.594 1.822-.594 1.342 0 2.291.62 2.791 1.745l2.455-1.057c-.941-2.118-2.877-3.12-5.246-3.12z" />
        <path
          clipRule="evenodd"
          d="M101.001 8.738V4.076h-2.698v16.189H101v-.927a5.859 5.859 0 003.639 1.238c3.547 0 6.33-2.98 6.33-6.538 0-3.558-2.783-6.538-6.33-6.538a5.859 5.859 0 00-3.639 1.238zm-.201 5.3c0 2.173 1.781 3.84 3.735 3.84 1.955 0 3.737-1.667 3.737-3.84s-1.782-3.84-3.737-3.84c-1.954 0-3.735 1.667-3.735 3.84z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h125v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Icon;
