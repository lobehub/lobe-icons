import React, { memo } from 'react';

import { RNIconProps } from '@/features';

import Color from './Color';

const Icon = memo<RNIconProps>(({ size = 24, style, color = '#000000', ...rest }) => {
  return (
    <Color color={color} size={size} style={{ filter: 'grayscale(100%)', ...style }} {...rest} />
  );
});

Icon.displayName = 'CogViewMono';

export default Icon;
