import type { DivProps } from '@lobehub/ui';
import { Divider, Flexbox } from '@lobehub/ui';
import type { ReactNode } from 'react';
import { memo } from 'react';

const Combine = memo<DivProps & { left: ReactNode; right: ReactNode; size: number }>(
  ({ left, right, size = 24, ...rest }) => {
    return (
      <Flexbox horizontal align={'center'} flex={'none'} gap={size / 3} {...rest}>
        {left}
        <Divider orientation={'vertical'} style={{ marginBlock: 0, marginInline: size / 6 }} />
        {right}
      </Flexbox>
    );
  },
);

export default Combine;
