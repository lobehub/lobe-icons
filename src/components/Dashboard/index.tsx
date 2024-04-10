import * as Icons from '@lobehub/icons';
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

const Dashboard = memo<{ className: string }>(() => {
  const { styles } = useStyles();

  return (
    <Flexbox
      align={'center'}
      gap={4}
      horizontal
      justify={'center'}
      style={{ flexWrap: 'wrap', maxWidth: 960 }}
    >
      {data.map((Icon: any, index) => {
        const IconRender = Icon.Color || Icon;
        return (
          <IconPreview className={styles.item} key={index}>
            <IconRender size={48} />
          </IconPreview>
        );
      })}
    </Flexbox>
  );
});

export default Dashboard;
