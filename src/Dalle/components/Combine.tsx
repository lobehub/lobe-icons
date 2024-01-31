import { memo } from 'react';

import IconCombine, { type IconCombineProps } from '@/IconCombine';

import { SPACE_MULTIPLE, TEXT_MULTIPLE } from '../style';
import Mono from './Mono';
import Text from './Text';

export type CombineProps = Omit<IconCombineProps, 'Icon' | 'Text'>;

const Combine = memo<CombineProps>(({ extraStyle, size = 24, ...rest }) => {
  return (
    <IconCombine
      Icon={Mono}
      Text={Text}
      extraStyle={{ fontSize: size * 0.85, marginLeft: size * SPACE_MULTIPLE, ...extraStyle }}
      size={size}
      spaceMultiple={SPACE_MULTIPLE}
      textMultiple={TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
