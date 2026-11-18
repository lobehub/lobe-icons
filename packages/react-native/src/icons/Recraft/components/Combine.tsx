import React, { memo } from 'react';

import { RNIconCombine, type RNIconCombineProps } from '@/features';

import { COMBINE_SPACE_MULTIPLE, COMBINE_TEXT_MULTIPLE, TITLE } from '../style';
import Text from './Text';

export type CombineProps = Omit<RNIconCombineProps, 'Icon' | 'Text'>;

// The Recraft brand guidelines don't allow placing the icon next to the wordmark,
// so the combined logo is the wordmark on its own.
const Combine = memo<CombineProps>(({ ...rest }) => {
  return (
    <RNIconCombine
      Text={Text}
      aria-label={TITLE}
      spaceMultiple={COMBINE_SPACE_MULTIPLE}
      textMultiple={COMBINE_TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
