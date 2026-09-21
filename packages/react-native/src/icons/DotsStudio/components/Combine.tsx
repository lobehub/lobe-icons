import React, { memo } from 'react';

import { RNIconCombine, type RNIconCombineProps } from '@/features';

import { SPACE_MULTIPLE, TEXT_MULTIPLE, TITLE } from '../style';
import Mono from './Mono';
import Text from './Text';

export type CombineProps = Omit<RNIconCombineProps, 'Icon' | 'Text'>;

const Combine = memo<CombineProps>(({ ...rest }) => {
  return (
    <RNIconCombine
      Icon={Mono}
      Text={Text}
      aria-label={TITLE}
      spaceMultiple={SPACE_MULTIPLE}
      textMultiple={TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
