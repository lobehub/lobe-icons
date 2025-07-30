import { Skeleton } from 'antd';
import { memo } from 'react';

export interface LoadingPlaceholderProps {
  shape?: 'circle' | 'square';
  size: number;
  type?: 'avatar' | 'mono' | 'color' | 'combine' | 'combine-color';
}

const LoadingPlaceholder = memo<LoadingPlaceholderProps>(({ size, shape, type }) => {
  if (type === 'avatar' || type === 'mono' || type === 'color') {
    return <Skeleton.Avatar shape={shape} size={size} />;
  }
  return <Skeleton.Button style={{ height: size }} />;
});

export default LoadingPlaceholder;
