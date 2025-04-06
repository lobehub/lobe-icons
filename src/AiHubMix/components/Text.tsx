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
      viewBox="0 0 51 8"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M0 7.84314L2.28407 0H4.45394L6.72659 7.84314H5.45893L4.93359 5.9944H1.80442L1.27908 7.84314H0ZM2.11277 4.87395H4.62524L3.46037 0.750701H3.27764L2.11277 4.87395Z" />
      <path d="M7.84391 7.84314V2.31933H9.02021V7.84314H7.84391ZM8.43777 1.56863C8.20936 1.56863 8.01522 1.49767 7.85533 1.35574C7.70306 1.20635 7.62692 1.01587 7.62692 0.784314C7.62692 0.552755 7.70306 0.366013 7.85533 0.22409C8.01522 0.0746967 8.20936 0 8.43777 0C8.67379 0 8.86793 0.0746967 9.02021 0.22409C9.17248 0.366013 9.24861 0.552755 9.24861 0.784314C9.24861 1.01587 9.17248 1.20635 9.02021 1.35574C8.86793 1.49767 8.67379 1.56863 8.43777 1.56863Z" />
      <path d="M10.7317 7.84314V0H11.9651V3.36134H15.3226V0H16.556V7.84314H15.3226V4.45938H11.9651V7.84314H10.7317Z" />
      <path d="M20.419 7.94398C19.9926 7.94398 19.6119 7.85061 19.2769 7.66387C18.9419 7.47712 18.6793 7.21195 18.4889 6.86835C18.2986 6.52474 18.2034 6.11391 18.2034 5.63585V2.31933H19.3797V5.55742C19.3797 6.03548 19.5015 6.39029 19.7452 6.62185C19.9888 6.84594 20.3276 6.95798 20.7616 6.95798C21.2412 6.95798 21.6257 6.80112 21.915 6.4874C22.212 6.1662 22.3604 5.70682 22.3604 5.10924V2.31933H23.5367V7.84314H22.3833V7.01401H22.2005C22.094 7.2381 21.9036 7.45098 21.6295 7.65266C21.3554 7.84687 20.9519 7.94398 20.419 7.94398Z" />
      <path d="M28.5304 8C27.9822 8 27.5596 7.90289 27.2627 7.70868C26.9734 7.51447 26.7564 7.29785 26.6117 7.05882H26.429V7.84314H25.2756V0H26.4519V3.07003H26.6346C26.7259 2.92064 26.8478 2.77871 27 2.64426C27.1523 2.50233 27.3541 2.38655 27.6053 2.29692C27.8566 2.20728 28.1649 2.16247 28.5304 2.16247C29.0024 2.16247 29.4364 2.27451 29.8323 2.4986C30.2282 2.72269 30.5442 3.04762 30.7802 3.47339C31.0162 3.89916 31.1342 4.4071 31.1342 4.9972V5.16527C31.1342 5.76284 31.0124 6.27451 30.7688 6.70028C30.5327 7.11858 30.2168 7.43978 29.8209 7.66387C29.4326 7.88796 29.0024 8 28.5304 8ZM28.1878 6.9916C28.6979 6.9916 29.1166 6.831 29.444 6.5098C29.779 6.18861 29.9465 5.72923 29.9465 5.13165V5.03081C29.9465 4.44071 29.7828 3.98506 29.4554 3.66387C29.128 3.34267 28.7055 3.18207 28.1878 3.18207C27.6853 3.18207 27.2665 3.34267 26.9315 3.66387C26.6041 3.98506 26.4404 4.44071 26.4404 5.03081V5.13165C26.4404 5.72923 26.6041 6.18861 26.9315 6.5098C27.2665 6.831 27.6853 6.9916 28.1878 6.9916Z" />
      <path d="M32.5575 7.84314V0H34.8758L36.6231 7.03641H36.8058L38.5532 0H40.8715V7.84314H39.6723V0.851541H39.4896L37.7537 7.84314H35.6752L33.9393 0.851541H33.7566V7.84314H32.5575Z" />
      <path d="M42.5734 7.84314V2.31933H43.7497V7.84314H42.5734ZM43.1672 1.56863C42.9388 1.56863 42.7447 1.49767 42.5848 1.35574C42.4325 1.20635 42.3564 1.01587 42.3564 0.784314C42.3564 0.552755 42.4325 0.366013 42.5848 0.22409C42.7447 0.0746967 42.9388 0 43.1672 0C43.4033 0 43.5974 0.0746967 43.7497 0.22409C43.902 0.366013 43.9781 0.552755 43.9781 0.784314C43.9781 1.01587 43.902 1.20635 43.7497 1.35574C43.5974 1.49767 43.4033 1.56863 43.1672 1.56863Z" />
      <path d="M45.0157 7.84314L47.1628 5.05322L45.0614 2.31933H46.4433L47.9165 4.30252H48.0992L49.5725 2.31933H50.9657L48.853 5.05322L51 7.84314H49.5953L48.0992 5.81513H47.9165L46.4204 7.84314H45.0157Z" />
    </svg>
  );
});

export default Icon;
