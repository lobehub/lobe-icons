'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b, c] = useFillIds(TITLE, 3);
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
      <path
        d="M7.852 2.88H.647a.594.594 0 01-.592-.592.592.592 0 01.594-.588h7.205c1.49 0 2.96.474 4.157 1.335A7.196 7.196 0 0116.173 1.7h7.198a.592.592 0 01.596.588.595.595 0 01-.596.589h-7.198a5.944 5.944 0 00-3.226.96c.355.357.671.754.938 1.18a5.647 5.647 0 013.183-.987h6.303a.594.594 0 01.596.588.595.595 0 01-.596.589h-6.303c-.956 0-1.894.308-2.654.869.194.472.332.963.417 1.467a3.99 3.99 0 012.898-1.238h5.642a.592.592 0 01.55.815.594.594 0 01-.55.362h-5.63a2.79 2.79 0 00-2.804 2.764v3.511c.004 1.522 1.262 2.763 2.804 2.764h5.685l.02.002a.592.592 0 01.553.626.592.592 0 01-.592.547H17.74c-2.197-.004-3.988-1.769-3.99-3.937V8.702c-.006-3.207-2.65-5.817-5.899-5.821z"
        fill={a.fill}
      />
      <path
        d="M.647 5.203h6.31c2.445 0 4.434 1.967 4.432 4.38v4.838c0 3.06 2.524 5.552 5.628 5.552h6.31a.592.592 0 00.597-.586.59.59 0 00-.596-.589h-6.323a4.428 4.428 0 01-4.094-2.7 4.325 4.325 0 01-.335-1.68V9.584c0-3.055-2.52-5.549-5.618-5.555H.647a.592.592 0 00-.594.589.592.592 0 00.594.586z"
        fill={b.fill}
      />
      <path
        d="M23.361 21.116h.063a.531.531 0 01.417.208.587.587 0 01-.448.973l-.02-.002h-7.21a7.159 7.159 0 01-4.158-1.333 7.212 7.212 0 01-4.162 1.333H.606l-.02-.002H.568a.588.588 0 01.04-1.175l.02.002H7.84a5.937 5.937 0 003.234-.957 7.033 7.033 0 01-.94-1.181 5.609 5.609 0 01-3.181.987H.644a.593.593 0 01-.597-.588.592.592 0 01.596-.587h6.32c.951 0 1.877-.304 2.643-.867a6.886 6.886 0 01-.415-1.465 4.003 4.003 0 01-2.902 1.234H.592a.589.589 0 01.02-1.177l.02.003h5.65c1.543-.002 2.8-1.244 2.803-2.765v-3.509c-.002-1.524-1.258-2.764-2.802-2.764H.645a.592.592 0 01-.596-.589.592.592 0 01.596-.588h5.638c2.195.004 3.988 1.771 3.99 3.937V15.3c.002 3.209 2.648 5.821 5.899 5.825h7.142l.047-.008z"
        fill={c.fill}
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="0"
          x2="23.45"
          y1="11.5"
          y2="15.091"
        >
          <stop stopColor="#6865FC" />
          <stop offset="1" stopColor="#467DF9" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="0"
          x2="23.45"
          y1="11.5"
          y2="15.091"
        >
          <stop stopColor="#6865FC" />
          <stop offset="1" stopColor="#467DF9" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={c.id}
          x1="0"
          x2="23.45"
          y1="11.5"
          y2="15.091"
        >
          <stop stopColor="#6865FC" />
          <stop offset="1" stopColor="#467DF9" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
