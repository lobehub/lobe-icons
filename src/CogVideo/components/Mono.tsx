'use client';

import { memo } from 'react';

import type { IconType } from '@/types';

import Color from './Color';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return <Color size={size} style={{ filter: 'grayscale(100%)', ...style }} {...rest} />;
});

export default Icon;
