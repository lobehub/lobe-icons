import { h } from 'vue';

import { defineIcon } from '../runtime';
import type { IconProps } from '../types';

// A neutral SVG fallback with no dependency on a framework-specific UI library.
export default defineIcon<IconProps>(
  () =>
    ({ size = 12, color = 'currentColor', style, ...rest }) =>
      h(
        'svg',
        {
          'fill': 'none',
          'height': size,
          'stroke': color,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 1.5,
          'viewBox': '0 0 24 24',
          'width': size,
          'xmlns': 'http://www.w3.org/2000/svg',
          ...rest,
          style,
        },
        [
          h('rect', { height: 16, rx: 4, width: 16, x: 4, y: 4 }),
          h('path', { d: 'M9 9h6v6H9zM9 1v3m6-3v3M9 20v3m6-3v3M1 9h3m-3 6h3m16-6h3m-3 6h3' }),
        ],
      ),
);
