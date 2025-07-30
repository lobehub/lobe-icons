import { DivProps } from '@lobehub/ui';
import { Divider } from 'antd';
import { Suspense, memo, useEffect, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

interface DynamicCombineProps extends DivProps {
  leftImport: () => Promise<{ default: any }>;
  leftSize?: number;
  rightImport: () => Promise<{ default: any }>;
  rightSize?: number;
  size: number;
  type?: 'color' | 'mono';
}

const LoadingPlaceholder = memo<{ size: number }>(({ size }) => (
  <div
    style={{
      backgroundColor: 'rgba(0,0,0,0.1)',
      borderRadius: '2px',
      height: size,
      width: size,
    }}
  />
));

const DynamicCombine = memo<DynamicCombineProps>(
  ({ leftImport, rightImport, size = 24, type = 'color', leftSize, rightSize, ...rest }) => {
    const [LeftIcon, setLeftIcon] = useState<any>(null);
    const [RightIcon, setRightIcon] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadIcons = async () => {
        try {
          const [leftModule, rightModule] = await Promise.all([leftImport(), rightImport()]);
          setLeftIcon(leftModule.default);
          setRightIcon(rightModule.default);
        } catch (error) {
          console.error('Failed to load icons:', error);
        } finally {
          setLoading(false);
        }
      };

      loadIcons();
    }, [leftImport, rightImport]);

    if (loading) {
      return (
        <Flexbox align={'center'} flex={'none'} gap={size / 3} horizontal {...rest}>
          <LoadingPlaceholder size={leftSize || size * 1.2} />
          <Divider style={{ marginBlock: 0, marginInline: size / 6 }} type={'vertical'} />
          <LoadingPlaceholder size={rightSize || size} />
        </Flexbox>
      );
    }

    const renderLeftIcon = () => {
      if (!LeftIcon) return <LoadingPlaceholder size={leftSize || size} />;
      return LeftIcon.Combine ? (
        <LeftIcon.Combine size={leftSize || size} type={type} />
      ) : (
        <LeftIcon size={leftSize || size} />
      );
    };

    const renderRightIcon = () => {
      if (!RightIcon) return <LoadingPlaceholder size={rightSize || size} />;

      return RightIcon.Combine ? (
        <RightIcon.Combine size={rightSize || size} type={type} />
      ) : (
        <RightIcon size={rightSize || size} />
      );
    };

    return (
      <Flexbox align={'center'} flex={'none'} gap={size / 3} horizontal {...rest}>
        <Suspense fallback={<LoadingPlaceholder size={leftSize || size * 1.2} />}>
          {renderLeftIcon()}
        </Suspense>
        <Divider style={{ marginBlock: 0, marginInline: size / 6 }} type={'vertical'} />
        <Suspense fallback={<LoadingPlaceholder size={rightSize || size} />}>
          {renderRightIcon()}
        </Suspense>
      </Flexbox>
    );
  },
);

export default DynamicCombine;
