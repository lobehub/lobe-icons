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
      viewBox="0 0 90 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M19.408 6.051a49.571 49.571 0 01-2.53-3.567.845.845 0 00-.336-.361A.93.93 0 0016.08 2h-1.77a.93.93 0 00-.814.428 40.853 40.853 0 01-2.516 3.5A22.752 22.752 0 018.216 8.8l1.172 1.451c1.052-.851 2.078-1.896 3.045-3.106.945-1.182 1.733-2.263 2.342-3.213l.052-.08h.71l.05.078c1.934 2.895 3.717 5.022 5.297 6.323l1.193-1.451a17.713 17.713 0 01-2.673-2.749l.004-.002z"></path>
      <path
        clipRule="evenodd"
        d="M38.76 15.054l.153-.347.164.341a18.47 18.47 0 005.207 6.504l1.217-1.542a16.082 16.082 0 01-3.386-3.648 17.204 17.204 0 01-2.118-4.286l-.075-.226h5.242V9.886h-5.33v-4.84l.159-.014c1.722-.15 3.217-.387 4.443-.705l-.61-1.876a23.937 23.937 0 01-3.578.595 51.91 51.91 0 01-4.149.191h-2.218V5.18h2.216c.365 0 .902-.013 1.593-.038l.181-.007v4.75h-5.058V2.722H25.34v7.242h3.12v8.21l-1.159.238v-6.178h-1.96v6.58l-.689.14.398 1.903 7.738-1.588-.398-1.903-1.969.405v-3.426h2.562V12.4h-2.562V9.963h2.575v1.887h4.72l-.042.206c-.496 2.432-2.002 4.933-4.481 7.448l.007.031-.045.01c-.316.319-.648.639-.995.959L33.445 22c2.517-2.31 4.304-4.648 5.313-6.946h.002zm-7.915-7.077h-3.527V4.665h3.527v3.312zM50.107 17.138l.659-2.926h6.055v1.652h-4.738l-.438 1.964h5.176v2.161h-8.517v1.943H67.32v-1.943h-8.516v-2.16h6.984v-1.965h-6.984v-1.652h7.425v-1.964h-7.425v-1.514h5.856a.314.314 0 00.053-.006h.952V2.546H49.846v.833l-.004.033a2.317 2.317 0 00-.009.093v6.267c0 .035.004.067.011.103v.851h1.005v.006h5.97v1.514h-5.614l.139-.616h-2.033l-1.238 5.506h2.032l.002.002zm1.731-12.65h11.823v1.18H51.838v-1.18zm0 4.28V7.61h11.823v1.157H51.838z"
      ></path>
      <path d="M12.964 9.752v4.823c0 1.34-.27 2.658-.804 3.918a12.493 12.493 0 01-2.206 3.464l-1.352-1.294a10.32 10.32 0 001.834-2.873c.45-1.059.68-2.14.68-3.215V9.752h1.848zM19.24 9.752h-1.848V21.78h1.848V9.752zM8.701 14.052c0 .463-.067.924-.202 1.368h-.002c-.482 1.534-1.693 2.658-3.598 3.343l-.677-1.809c1.277-.477 2.078-1.173 2.383-2.076.075-.264.111-.526.111-.779 0-.627-.144-1.281-.43-1.946-.287-.663-.577-1.19-.854-1.549a1.138 1.138 0 01-.19-.616.79.79 0 01.026-.235l1.313-5.14H3.983v17.385H2V2.648h5.822c.303 0 .553.125.766.38.15.178.227.373.227.58 0 .06-.017.151-.046.269l-1.474 5.93.038.062c.909 1.469 1.368 2.877 1.368 4.183zM73.342 6.593H87.86v1.964H73.342V6.593z"></path>
      <path d="M87.86 2.546H69.894l-.006 19.35h1.983V4.489H87.86V2.546z"></path>
      <path d="M77.575 19.945h-1.257v-7.55H87.86v-1.944H73.342v1.944h1.014v9.5l.587.002.01.014h3.258l5.266-3.736v-.001l1.613-1.143-1.613 1.144 2.789 3.737 1.595-1.167-2.77-3.714 2.768-1.962-1.155-1.597-4.405 3.123-4.724 3.35z"></path>
    </svg>
  );
});

export default Icon;
