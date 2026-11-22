'use client';

import { memo } from 'react';

import IconCombine, { type IconCombineProps } from '@/features/IconCombine';
import type { IconType } from '@/types';

import {
  COMBINE_SPACE_MULTIPLE,
  COMBINE_TEXT_MULTIPLE,
  COMBINE_TEXT_SHIFT_MULTIPLE,
  TITLE,
} from '../style';
import Mono from './Mono';
import Text from './Text';

export type CombineProps = Omit<IconCombineProps, 'Icon' | 'Text'>;

const CombineText: IconType = memo(({ size = '1em', style, ...rest }) => {
  const shift =
    typeof size === 'number' ? (size / COMBINE_TEXT_MULTIPLE) * COMBINE_TEXT_SHIFT_MULTIPLE : 0;

  return (
    <Text
      size={size}
      style={{ transform: shift ? `translateY(${shift}px)` : undefined, ...style }}
      {...rest}
    />
  );
});

const Combine = memo<CombineProps>(({ ...rest }) => {
  return (
    <IconCombine
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
