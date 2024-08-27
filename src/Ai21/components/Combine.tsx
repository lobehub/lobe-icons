import { memo } from 'react';

import IconCombine, { type IconCombineProps } from '@/IconCombine';

import { SPACE_MULTIPLE, TEXT_MULTIPLE, TITLE } from '../style';
import Avatar from './Avatar';
import Text from './Text';

export interface CombineProps extends Omit<IconCombineProps, 'Icon' | 'Text'> {
  type: 'mono' | 'color';
}
const Combine = memo<CombineProps>(({ type = 'mono', iconProps, ...rest }) => {
  // @ts-ignore
  if (type === 'mono') return <Text {...rest} />;

  return (
    <IconCombine
      Icon={Avatar}
      Text={Text}
      aria-label={TITLE}
      iconProps={{ shape: 'square', ...iconProps }}
      spaceMultiple={SPACE_MULTIPLE}
      textMultiple={TEXT_MULTIPLE}
      {...rest}
    />
  );
});

export default Combine;
