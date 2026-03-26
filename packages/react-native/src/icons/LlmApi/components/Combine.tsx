import React, { memo } from 'react';

import { RNIconCombine, type RNIconCombineProps } from '@/features';

import { COMBINE_SPACE_MULTIPLE, COMBINE_TEXT_MULTIPLE, TITLE } from '../style';
import Avatar from './Avatar';
import Mono from './Mono';
import Text from './Text';

export interface CombineProps extends Omit<RNIconCombineProps, 'Icon' | 'Text'> {
  type?: 'color' | 'mono';
}
const Combine = memo<CombineProps>(({ type = 'color', extraStyle, ...rest }) => {
  const Icon = type === 'color' ? Avatar : Mono;

  return (
    <RNIconCombine
      Icon={Icon}
      Text={Text}
      aria-label={TITLE}
      extraStyle={{ ...extraStyle }}
      spaceMultiple={COMBINE_SPACE_MULTIPLE}
      textMultiple={COMBINE_TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
