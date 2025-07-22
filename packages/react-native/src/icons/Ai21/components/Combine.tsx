import React, { memo } from 'react';

import { RNIconCombine, type RNIconCombineProps } from '@/features';

import { COMBINE_SPACE_MULTIPLE, COMBINE_TEXT_MULTIPLE, TITLE } from '../style';
import Brand from './Brand';
import BrandColor from './BrandColor';

export interface CombineProps extends Omit<RNIconCombineProps, 'Icon' | 'Text'> {
  type: 'mono' | 'color';
}
const Combine = memo<CombineProps>(({ type = 'mono', ...rest }) => {
  return (
    <RNIconCombine
      Text={type === 'mono' ? Brand : BrandColor}
      aria-label={TITLE}
      spaceMultiple={COMBINE_SPACE_MULTIPLE}
      textMultiple={COMBINE_TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
