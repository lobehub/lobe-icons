import * as Icons from '@lobehub/icons';
import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import IconPreview from '@/components/IconPreview';

const data = Object.values(Icons).filter((icon: any) => icon?.colorPrimary);

const useStyles = createStyles(({ css, token }) => ({
  item: css`
    width: 96px;
    height: 96px;
    background: ${token.colorBgContainer};
    border: none;
  `,
}));

const Dashboard = memo<{ className: string }>(({ className }) => {
  const { styles } = useStyles();
  const store = useCreateStore();

  const { size, color, monochrome } = useControls(
    {
      color: {
        color: true,
        value: '#ffffff',
      },
      monochrome: false,
      size: {
        max: 96,
        min: 16,
        step: 1,
        value: 48,
      },
    },
    { store },
  );

  return (
    <StoryBook className={className} levaStore={store}>
      <Flexbox align={'center'} gap={4} horizontal justify={'center'} style={{ flexWrap: 'wrap' }}>
        {data.map((Icon: any, index) => {
          const IconRender = !monochrome && Icon.Color ? Icon.Color : Icon;
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
