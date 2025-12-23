import { DivProps, Flexbox } from '@lobehub/ui';
import { Divider } from 'antd';
import { ReactNode, memo } from 'react';

const Combine = memo<DivProps & { left: ReactNode; right: ReactNode; size: number }>(
  ({ left, right, size = 24, ...rest }) => {
    return (
      <Flexbox align={'center'} flex={'none'} gap={size / 3} horizontal {...rest}>
        {left}
        <Divider style={{ marginBlock: 0, marginInline: size / 6 }} type={'vertical'} />
        {right}
      </Flexbox>
    );
  },
);

export default Combine;
