'use client';

import * as Icons from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';
import { StoryBook, useControls, useCreateStore } from '@lobehub/ui/storybook';
import { createStaticStyles } from 'antd-style';
import { memo } from 'react';

import IconPreview from '@/components/IconPreview';

const data = Object.values(Icons).filter((icon: any) => icon?.colorPrimary);

const styles = createStaticStyles(({ css, cssVar }) => ({
  item: css`
    height: 96px;
    padding: 16px;
    border: none;
    background: ${cssVar.colorBgContainer};
  `,
}));

const Dashboard = memo<{ className: string }>(({ className }) => {
  const store = useCreateStore();

  const { size, color } = useControls(
    {
      color: {
        color: true,
        value: '#ffffff',
      },
      size: {
        max: 96,
        min: 16,
        step: 1,
        value: 24,
      },
    },
    { store },
  );

  return (
    <StoryBook className={className} levaStore={store}>
      <Flexbox align={'center'} gap={4} horizontal justify={'center'} style={{ flexWrap: 'wrap' }}>
        {data.map((Icon: any, index) => {
          const IconRender = Icon.Text || Icon.Brand;
          if (!IconRender) return null;
          return (
            <IconPreview className={styles.item} key={index}>
              <IconRender color={color === '#ffffff' ? undefined : color} size={size} />
            </IconPreview>
          );
        })}
      </Flexbox>
    </StoryBook>
  );
});

export default Dashboard;
