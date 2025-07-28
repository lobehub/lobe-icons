import React, { memo } from 'react';

import { RNIconCombine, type RNIconCombineProps } from '@/features';

import { COMBINE_SPACE_MULTIPLE, COMBINE_TEXT_MULTIPLE, TITLE } from '../style';
import Mono from './Mono';
import Text from './Text';

export type CombineProps = Omit<RNIconCombineProps, 'Icon' | 'Text'>;

const Combine = memo<CombineProps>(({ ...rest }) => {
  return (
    <RNIconCombine
      Icon={Mono}
      Text={Text}
      aria-label={TITLE}
      iconProps={{ shape: 'square' }}
      spaceMultiple={COMBINE_SPACE_MULTIPLE}
      textMultiple={COMBINE_TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
