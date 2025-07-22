import React, { memo } from 'react';

import { RNIconCombine, type RNIconCombineProps } from '@/features';
import Mono from '@/icons/OpenAI/components/Mono';

import { COMBINE_SPACE_MULTIPLE, COMBINE_TEXT_MULTIPLE, TITLE } from '../style';
import Text from './Text';

export type CombineProps = Omit<RNIconCombineProps, 'Icon' | 'Text'>;

const Combine = memo<CombineProps>(({ extraStyle, size = 24, ...rest }) => {
  return (
    <RNIconCombine
      Icon={Mono}
      Text={Text}
      aria-label={TITLE}
      extraStyle={{
        marginLeft: size * COMBINE_SPACE_MULTIPLE,
        ...extraStyle,
      }}
      size={size}
      spaceMultiple={COMBINE_SPACE_MULTIPLE}
      textMultiple={COMBINE_TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
