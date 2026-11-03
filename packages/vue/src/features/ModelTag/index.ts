import { h, type HTMLAttributes } from 'vue';

import { defineIcon } from '../../runtime';
import ModelIcon from '../ModelIcon';

export interface ModelTagProps extends HTMLAttributes {
  model: string;
  type?: 'color' | 'mono';
}

export default defineIcon<ModelTagProps>(
  () =>
    ({ type = 'mono', model, style, ...rest }) =>
      h(
        'span',
        {
          ...rest,
          style: [
            {
              alignItems: 'center',
              border: '1px solid currentColor',
              borderRadius: '4px',
              display: 'inline-flex',
              gap: '4px',
              padding: '2px 6px',
            },
            style,
          ],
        },
        [h(ModelIcon, { model, type }), model],
      ),
);
