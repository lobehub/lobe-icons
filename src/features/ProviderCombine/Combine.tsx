import { DivProps, Divider, Flexbox } from '@lobehub/ui';
import { ReactNode, memo } from 'react';

const Combine = memo<DivProps & { left: ReactNode; right: ReactNode; size: number }>(
  ({ left, right, size = 24, ...rest }) => {
    return (
      <Flexbox align={'center'} flex={'none'} gap={size / 3} horizontal {...rest}>
        {left}
        <Divider orientation={'vertical'} style={{ marginBlock: 0, marginInline: size / 6 }} />
        {right}
      </Flexbox>
    );
  },
);

export default Combine;
