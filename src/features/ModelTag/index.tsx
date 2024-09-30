import { Tag, TagProps } from '@lobehub/ui';
import { memo } from 'react';

import ModelIcon from '../ModelIcon';

export interface ModelTagProps extends Omit<TagProps, 'icon' | 'children'> {
  model: string;
  type?: 'color' | 'mono';
}
const ModelTag = memo<ModelTagProps>(({ type = 'mono', model, ...rest }) => (
  <Tag icon={<ModelIcon model={model} type={type} />} {...rest}>
    {model}
  </Tag>
));

export default ModelTag;
