'use client';

import { memo } from 'react';

import IconCombine, { type IconCombineProps } from '@/features/IconCombine';
import Mono from '@/OpenAI/components/Mono';

import { COMBINE_SPACE_MULTIPLE, COMBINE_TEXT_MULTIPLE, TITLE } from '../style';
import Text from './Text';

export type CombineProps = Omit<IconCombineProps, 'Icon' | 'Text'>;

const Combine = memo<CombineProps>(({ extraStyle, size = 24, ...rest }) => {
  return (
    <IconCombine
      Icon={Mono}
      Text={Text}
      aria-label={TITLE}
      size={size}
      spaceMultiple={COMBINE_SPACE_MULTIPLE}
      textMultiple={COMBINE_TEXT_MULTIPLE}
      extraStyle={{
        fontSize: size * 0.85,
        marginLeft: size * COMBINE_SPACE_MULTIPLE,
        ...extraStyle,
      }}
      {...rest}
    />
  );
});

export default Combine;
