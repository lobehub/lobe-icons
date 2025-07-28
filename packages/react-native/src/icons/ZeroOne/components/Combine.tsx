import React, { memo } from 'react';

import { RNIconCombine, type RNIconCombineProps } from '@/features';

import { COMBINE_SPACE_MULTIPLE, COMBINE_TEXT_MULTIPLE, TITLE } from '../style';
import Text from './Text';

export interface CombineProps extends Omit<RNIconCombineProps, 'Icon' | 'Text'> {
  type?: 'mono' | 'color';
}

const Combine = memo<CombineProps>(({ type = 'mono', ...rest }) => {
  return (
    <RNIconCombine
      Text={Text}
      aria-label={TITLE}
      color={type === 'color' ? '#00ffb3' : undefined}
      spaceMultiple={COMBINE_SPACE_MULTIPLE}
      textMultiple={COMBINE_TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
