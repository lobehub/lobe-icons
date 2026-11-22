import React, { memo } from 'react';

import type { RNIconProps } from '@/features';
import { RNIconCombine, type RNIconCombineProps } from '@/features';

import {
  COMBINE_SPACE_MULTIPLE,
  COMBINE_TEXT_MULTIPLE,
  COMBINE_TEXT_SHIFT_MULTIPLE,
  TITLE,
} from '../style';
import Mono from './Mono';
import Text from './Text';

export type CombineProps = Omit<RNIconCombineProps, 'Icon' | 'Text'>;

const CombineText = memo<RNIconProps>(({ size = 24, style, ...rest }) => {
  const resolved = typeof size === 'number' ? size : 24;
  const shift = (resolved / COMBINE_TEXT_MULTIPLE) * COMBINE_TEXT_SHIFT_MULTIPLE;

  return <Text size={size} style={{ transform: [{ translateY: shift }], ...style }} {...rest} />;
});

const Combine = memo<CombineProps>(({ ...rest }) => {
  return (
    <RNIconCombine
      Icon={Mono}
      Text={CombineText}
      aria-label={TITLE}
      spaceMultiple={COMBINE_SPACE_MULTIPLE}
      textMultiple={COMBINE_TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
