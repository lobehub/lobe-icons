import React, { memo } from 'react';

import { RNIconCombine, type RNIconCombineProps } from '@/features';

import { COMBINE_SPACE_MULTIPLE, COMBINE_TEXT_MULTIPLE } from '../style';
import Avatar from './Avatar';
import Text from './Text';

export type CombineProps = Omit<RNIconCombineProps, 'Icon' | 'Text'>;

const Combine = memo<CombineProps>(({ iconProps, ...rest }) => {
  return (
    <RNIconCombine
      Icon={Avatar as any}
      Text={Text as any}
      iconProps={{ shape: 'square', ...iconProps }}
      spaceMultiple={COMBINE_SPACE_MULTIPLE}
      textMultiple={COMBINE_TEXT_MULTIPLE}
      {...rest}
    />
  );
});

Combine.displayName = 'AdobeFireflyCombine';

export default Combine;
