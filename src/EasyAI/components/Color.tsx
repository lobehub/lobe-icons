'use client';

import { memo } from 'react';

import { useFillIds } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const [a, b] = useFillIds(TITLE, 2);
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
        d="M12 .494C13.513 6.567 17.902 10.679 24 12c-6.098 1.321-10.487 5.433-12 11.506C10.487 17.433 6.098 13.321 0 12 6.098 10.679 10.487 6.567 12 .494"
        fill={a.fill}
      />
      <path
        d="M12 .494C13.513 6.567 17.902 10.679 24 12c-6.098 1.321-10.487 5.433-12 11.506C10.487 17.433 6.098 13.321 0 12 6.098 10.679 10.487 6.567 12 .494"
        fill={b.fill}
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={a.id}
          x1="0"
          x2="0"
          y1="-3.08"
          y2="27.051"
        >
          <stop offset=".13" stopColor="#d660a5" />
          <stop offset=".26" stopColor="#d670ac" />
          <stop offset=".35" stopColor="#d681ae" />
          <stop offset=".46" stopColor="#d89bad" />
          <stop offset=".5" stopColor="#daa8ab" />
          <stop offset=".71" stopColor="#eacf9d" />
          <stop offset=".82" stopColor="#f1e093" />
          <stop offset=".86" stopColor="#f2e491" />
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={b.id}
          x1="-3.065"
          x2="27.065"
          y1="0"
          y2="0"
        >
          <stop offset=".14" stopColor="#98db9a" stopOpacity=".82" />
          <stop offset=".17" stopColor="#8de49a" stopOpacity=".62" />
          <stop offset=".19" stopColor="#92e09d" stopOpacity=".6" />
          <stop offset=".22" stopColor="#a7cea3" stopOpacity=".71" />
          <stop offset=".23" stopColor="#adc9a5" stopOpacity=".73" />
          <stop offset=".25" stopColor="#b0c6a7" stopOpacity=".73" />
          <stop offset=".28" stopColor="#b4c1a9" stopOpacity=".68" />
          <stop offset=".37" stopColor="#b6bbab" stopOpacity=".37" />
          <stop offset=".44" stopColor="#a5baaf" stopOpacity=".09" />
          <stop offset=".47" stopColor="#94b8b2" stopOpacity=".02" />
          <stop offset=".5" stopColor="#ffb69f" stopOpacity="0" />
          <stop offset=".55" stopColor="#ffb9a1" stopOpacity=".05" />
          <stop offset=".68" stopColor="#fdc5a0" stopOpacity=".42" />
          <stop offset=".71" stopColor="#fecb9e" stopOpacity=".51" />
          <stop offset=".76" stopColor="#fccf9c" stopOpacity=".71" />
          <stop offset=".79" stopColor="#fcd09b" stopOpacity=".82" />
          <stop offset=".82" stopColor="#fcd29a" stopOpacity=".91" />
          <stop offset=".85" stopColor="#fcd399" stopOpacity=".97" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Icon;
