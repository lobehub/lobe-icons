'use client';

import { memo } from 'react';

import Mono from '@/OpenAI/components/Mono';
import IconCombine, { type IconCombineProps } from '@/features/IconCombine';

import { COMBINE_SPACE_MULTIPLE, COMBINE_TEXT_MULTIPLE, TITLE } from '../style';
import Text from './Text';

export type CombineProps = Omit<IconCombineProps, 'Icon' | 'Text'>;

const Combine = memo<CombineProps>(({ extraStyle, size = 24, ...rest }) => {
  return (
    <IconCombine
      Icon={Mono}
      Text={Text}
      aria-label={TITLE}
      extraStyle={{
        fontSize: size * 0.85,
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
