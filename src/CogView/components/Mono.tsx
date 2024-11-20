'use client';

import { forwardRef } from 'react';

import type { IconType } from '@/types';

import Color from './Color';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return <Color ref={ref} size={size} style={{ filter: 'grayscale(100%)', ...style }} {...rest} />;
});

export default Icon;
