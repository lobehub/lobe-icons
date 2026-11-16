import { type CSSProperties, h } from 'vue';

import { defineIcon } from './runtime';
import type { FlexboxProps } from './types';

const cssSize = (size?: number | string) => (typeof size === 'number' ? `${size}px` : size);

export const Flexbox = defineIcon<FlexboxProps>(
  () =>
    ({ horizontal, align, justify, flex, gap, height, width, style, children, ...rest }) =>
      h(
        'div',
        {
          ...rest,
          style: [
            {
              alignItems: align,
              display: 'flex',
              flex,
              flexDirection: horizontal ? 'row' : 'column',
              gap: cssSize(gap),
              height: cssSize(height),
              justifyContent: justify,
              width: cssSize(width),
            },
            style,
          ],
        },
        [children],
      ),
);

export const Divider = defineIcon<{ orientation?: string; style?: CSSProperties }>(
  () =>
    ({ style }) =>
      h('span', {
        'aria-hidden': true,
        'style': [{ borderLeft: '1px solid currentColor', height: '1em', opacity: 0.2 }, style],
      }),
);
