'use client';

import { memo } from 'react';

import IconCombine, { type IconCombineProps } from '@/features/IconCombine';

import { SPACE_MULTIPLE, TEXT_MULTIPLE, TITLE } from '../style';
import Avatar from './Avatar';
import Text from './Text';

export interface CombineProps extends Omit<IconCombineProps, 'Icon' | 'Text'> {
  type?: 'color' | 'mono';
}
const Combine = memo<CombineProps>(({ ...rest }) => {
  return (
    <IconCombine
      Icon={Avatar}
      Text={Text}
      aria-label={TITLE}
      iconProps={{ shape: 'square' }}
      spaceMultiple={SPACE_MULTIPLE}
      textMultiple={TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
