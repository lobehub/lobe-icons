import { forwardRef } from 'react';

import { useFillId } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  const { id, fill } = useFillId(TITLE);
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <defs>
        <linearGradient id={id} x1="17.764%" x2="100%" y1="8.678%" y2="91.322%">
          <stop offset="0%" stopColor="#FEC13E"></stop>
          <stop offset="100%" stopColor="#FF6933"></stop>
        </linearGradient>
      </defs>
      <path
        d="M7.333 2h-3.2l-2 4.333V17.8L0 22h5.2l2.028-4.2L7.333 2zm7.334 0h-5.2v20h5.2V2zM16.8 7.733H22V22h-5.2V7.733zM22 2h-5.2v4.133H22V2z"
        fill={fill}
        fillRule="nonzero"
      ></path>
    </svg>
  );
});

export default Icon;
