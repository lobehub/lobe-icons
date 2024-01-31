import { forwardRef } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

const Icon = forwardRef<HTMLDivElement, FlexboxProps & { size: string | number }>(
  ({ size = '1em', style, ...rest }, ref) => {
    return (
      <Flexbox
        ref={ref}
        style={{ fontSize: size, fontWeight: 500, lineHeight: 1, ...style }}
        {...rest}
      >
        Ollama
      </Flexbox>
    );
  },
);

export default Icon;
