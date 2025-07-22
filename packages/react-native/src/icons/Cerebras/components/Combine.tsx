import React, { memo } from 'react';

import { RNIconCombine, type RNIconCombineProps } from '@/features';

import { COMBINE_SPACE_MULTIPLE, COMBINE_TEXT_MULTIPLE, TITLE } from '../style';
import Color from './BrandColor';
import Mono from './BrandMono';

export interface CombineProps extends Omit<RNIconCombineProps, 'Icon' | 'Text'> {
  type?: 'color' | 'mono';
}
const Combine = memo<CombineProps>(({ type = 'mono', ...rest }) => {
  const Icon = type === 'color' ? Color : Mono;

  return (
    <RNIconCombine
      Icon={Icon}
      aria-label={TITLE}
      spaceMultiple={COMBINE_SPACE_MULTIPLE}
      textMultiple={COMBINE_TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
