'use client';

import { memo } from 'react';

import IconCombine, { type IconCombineProps } from '@/features/IconCombine';

import { COMBINE_SPACE_MULTIPLE, COMBINE_TEXT_MULTIPLE, TITLE } from '../style';
import Brand from './Brand';
import BrandColor from './BrandColor';

export interface CombineProps extends Omit<IconCombineProps, 'Icon' | 'Text'> {
  type: 'mono' | 'color';
}
const Combine = memo<CombineProps>(({ type = 'mono', ...rest }) => {
  return (
    <IconCombine
      Text={type === 'mono' ? Brand : BrandColor}
      aria-label={TITLE}
      spaceMultiple={COMBINE_SPACE_MULTIPLE}
      textMultiple={COMBINE_TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
