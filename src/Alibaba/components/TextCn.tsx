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
      style={{ flex: 'none', lineHeight: 1, width: 'fit-content', ...style }}
      viewBox="0 0 89 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M17.22 5.976v8.932c0 .712-.356 1.335-.86 1.9-.268.266-.564.504-.86.741-.565.415-1.188.593-1.781.653h-3.53V5.976H17.218zM12.948 8.35v7.597h1.483V8.35h-1.483zM9.03 2v5.786c0 .831-.979 1.514-1.394 1.84.415.327 1.394 1.009 1.394 1.81v4.451c0 .801-1.305 2.344-2.403 2.404H4.967V19.3c0 1.394-1.543 2.67-2.967 2.67V2h7.031zM4.967 4.433v11.454h1.157v-5.786h-.95c.03 0 .06 0 .09-.03.03 0 .03 0 .03-.03l.237-.237.03-.03c.326-.326.563-.86.563-1.157V4.463c-.03-.03-.564-.03-.564-.03h-.593zM21.997 2c0 .623-.475 2.433-1.128 2.433v14.718c0 1.93-2.017 2.82-2.967 2.82V4.432H9.447V2h12.55zm19.64 20h-17.86v-2.315h7.921v-1.899h-7.684v-2.195h7.684v-1.633h-7.684V2h19.047v9.288c-.06.95-2.106 2.64-3.382 2.64h-4.45v1.633h7.95c-.415.801-1.186 2.196-2.076 2.196h-5.874v1.899l8.396.03c-.564.86-1.246 2.314-1.988 2.314zm-6.408-10.267h4.302V4.285h-4.302v2.581h3.975c-.178.179-1.513 1.9-1.78 2.048h-.03c-.237.148-.415.237-.623.237H35.23v2.582zm-3.56-2.611h-4.214v2.581h4.213V9.122zm0-4.837h-4.214v2.581h4.213V4.285zM62.493 21.97H48.045c-1.542 0-2.373-1.394-2.373-2.819V2H64.6v9.02c-.059.95-2.047 2.73-3.145 2.73H49.291v5.639h15.843c-.207.83-1.542 2.581-2.64 2.581zM61.04 11.2V4.552h-4.005v6.647h4.005zm-7.476 0V4.552H49.32v6.647h4.243zM84.36 21.97H69.91c-1.572 0-2.373-1.394-2.373-2.819V2h18.928v9.02c-.06.95-2.047 2.73-3.145 2.73H71.098v5.639H87c-.208.83-1.543 2.581-2.64 2.581zM82.935 11.2V4.552h-4.034v6.647h4.034zm-7.565 0V4.552h-4.213v6.647h4.213z"></path>
    </svg>
  );
});

export default Icon;