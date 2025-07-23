import React, { memo } from 'react';

import { RNIconCombine, type RNIconCombineProps } from '@/features';

import { COLOR_PRIMARY, COMBINE_SPACE_MULTIPLE, COMBINE_TEXT_MULTIPLE, TITLE } from '../style';
import Mono from './Mono';
import Text from './Text';

export interface CombineProps extends Omit<RNIconCombineProps, 'Icon' | 'Text'> {
  type?: 'mono' | 'color';
}

const Combine = memo<CombineProps>(({ type = 'mono', iconProps, ...rest }) => {
  return (
    <RNIconCombine
      Icon={Mono}
      Text={Text as any}
      aria-label={TITLE}
      iconProps={{
        color: type === 'color' ? COLOR_PRIMARY : undefined,
        ...iconProps,
      }}
      spaceMultiple={COMBINE_SPACE_MULTIPLE}
      textMultiple={COMBINE_TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
