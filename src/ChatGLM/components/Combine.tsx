import { memo } from 'react';
import { Flexbox, type FlexboxProps } from 'react-layout-kit';

import { SPACE_MULTIPLE, TEXT_MULTIPLE } from '../style';
import Color from './Color';
import Mono from './Mono';
import Text from './Text';

export interface CombineProps extends FlexboxProps {
  size?: number;
  type?: 'color' | 'mono';
}
const Combine = memo<CombineProps>(({ type = 'mono', size = 24, ...rest }) => {
  const Icon = type === 'color' ? Color : Mono;

  return (
    <Flexbox align={'center'} flex={'none'} gap={size * SPACE_MULTIPLE} horizontal {...rest}>
      <Icon size={size} />
      <Text size={size * TEXT_MULTIPLE} />
    </Flexbox>
  );
});

export default Combine;
