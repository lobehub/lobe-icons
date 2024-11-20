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
      viewBox="0 0 24 24"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M5.246 12c0 .837-.086 1.554-.257 2.151-.172.598-.45 1.055-.837 1.373-.386.317-.898.476-1.534.476-.901 0-1.563-.353-1.985-1.059C.211 14.235 0 13.255 0 12c0-.837.086-1.554.257-2.151.172-.598.45-1.055.832-1.373C1.472 8.16 1.981 8 2.618 8c.894 0 1.555.351 1.985 1.053.429.702.643 1.685.643 2.947zm-3.883 0c0 .956.09 1.668.273 2.134.183.467.51.7.982.7.465 0 .792-.23.981-.694.19-.463.285-1.176.285-2.14 0-.956-.095-1.668-.285-2.134-.19-.467-.516-.7-.981-.7-.472 0-.8.233-.982.7-.182.466-.273 1.178-.273 2.134zm8.52 3.771H8.517l.011-6.295-1.823.324V8.571l2.04-.457h1.136v7.657zm2.497-1.6h.543c.3 0 .543.256.543.572v.571a.558.558 0 01-.543.572h-.543a.558.558 0 01-.543-.572v-.571c0-.316.243-.572.543-.572zm10.317-6.057H24v7.772h-1.303V8.114zm-3.692 0l2.606 7.772h-1.303l-.69-2.058h-3.073l-.69 2.058h-1.303l2.606-7.772h1.847zm.191 4.457l-1.115-3.323-1.114 3.323h2.23z"></path>
    </svg>
  );
});

export default Icon;
