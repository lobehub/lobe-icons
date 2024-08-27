import { memo } from 'react';

import IconCombine, { type IconCombineProps } from '@/IconCombine';

import { SPACE_MULTIPLE, TEXT_MULTIPLE, TITLE } from '../style';
import Avatar from './Avatar';
import Text from './Text';

export interface CombineProps extends Omit<IconCombineProps, 'Icon' | 'Text'> {
  type?: 'mono' | 'color';
}

const Combine = memo<CombineProps>(({ type = 'mono', ...rest }) => {
  return (
    <IconCombine
      Icon={Avatar}
      Text={Text}
      aria-label={TITLE}
      showLogo={type === 'color'}
      spaceMultiple={SPACE_MULTIPLE}
      textMultiple={TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
