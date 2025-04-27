'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
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
        d="M5.407 0v.066a.974.974 0 00-.048.245c-.011.11-.016.208-.016.295 0 .339.043.715.128 1.13.097.405.274.912.531 1.524l7.125 16.366L20.011 3.39c.161-.404.333-.846.515-1.327.182-.48.273-.966.273-1.458a1.406 1.406 0 00-.096-.54V0H24v.066c-.204.207-.45.578-.74 1.114-.29.535-.606 1.195-.949 1.982L13.095 24h-1.287L3.075 3.965c-.204-.47-.418-.923-.644-1.36-.214-.437-.418-.83-.61-1.18-.194-.36-.365-.66-.515-.9A5.666 5.666 0 001 .064V0h4.407z"
        fill="#012E33"
      />
    </svg>
  );
});

export default Icon;
