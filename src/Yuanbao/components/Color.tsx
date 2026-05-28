'use client';

import { memo } from 'react';

import { useFillId } from '@/hooks/useFillId';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  const { id, fill } = useFillId(TITLE);
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
      <g clipPath={fill}>
        <path
          d="M7.063 1.664C5.198 3.338 4.395 6.67 5.782 8.568c1.47 2.014 4.79 1.745 6.953.113 2.434-1.839 6.033-1.793 7.23.953.91 2.207.067 4.927-2.113 6.483-4.302 3.097-10.577 2.521-13.472-1.444-2.86-3.915-1.35-9.696 2.683-13.011v.002z"
          fill="#fff"
         />
        <path
          d="M12.007.647C5.384.647.015 5.734.015 12.007s5.369 11.36 11.992 11.36C18.631 23.366 24 18.28 24 12.006S18.631.647 12.007.647zm5.846 15.472C13.55 19.216 7.275 18.64 4.38 14.675 1.521 10.759 3.03 4.979 7.064 1.664 5.199 3.338 4.396 6.67 5.782 8.568c1.47 2.014 4.791 1.745 6.954.112 2.433-1.838 6.032-1.792 7.23.954.91 2.207.067 4.926-2.113 6.483v.002z"
          fill="color(display-p3 0 .8 .4392)"
         />
        <path
          d="M14.801 14.904a.669.669 0 01-.536-.269l-1.02-1.37a.67.67 0 01.006-.806l1.02-1.328a.668.668 0 011.059.815l-.712.925.72.963a.669.669 0 01-.535 1.066l-.002.004zM10.87 12.903c0 1.797-.356 2.135-1.16 2.135-.806 0-1.162-.338-1.162-2.135 0-1.796.357-2.134 1.161-2.134.805 0 1.162.338 1.162 2.134z"
          fill="color(display-p3 .1098 .1098 .1098)"
         />
      </g>
      <defs>
        <clipPath id={id}>
          <rect fill="#fff" height="24" rx="5.625" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
});

export default Icon;
