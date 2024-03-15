import { memo } from 'react';

import IconCombine, { type IconCombineProps } from '@/IconCombine';

import { SPACE_MULTIPLE, TEXT_MULTIPLE, TITLE } from '../style';
import Avatar from './Avatar';
import Text from './Text';

export type CombineProps = Omit<IconCombineProps, 'Icon' | 'Text'>;

const Combine = memo<CombineProps>(({ ...rest }) => {
  return (
    <IconCombine
      Icon={Avatar as any}
      Text={Text as any}
      aria-label={TITLE}
      spaceMultiple={SPACE_MULTIPLE}
      textMultiple={TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
