import { Features, FeaturesProps } from '@lobehub/ui';
import { Segmented } from 'antd';
import { createStyles } from 'antd-style';
import { Expand, GitPullRequest, Trees } from 'lucide-react';
import { useState } from 'react';
import { Center } from 'react-layout-kit';

import Dashboard from '@/components/Dashboard';
import DashboardText from '@/components/Dashboard/Text';

const items: FeaturesProps['items'] = [
  {
    description:
      'Icons are designed to be lightweight, utilizing highly optimized scalable vector graphics (SVG) for the best performance and quality.',
    icon: Expand,
    title: 'Lightweight & Scalable',
  },
  {
    description:
      'The collection is tree-shakable, ensuring that you only import the icons that you use, which helps in reducing the overall bundle size of your project.',
    icon: Trees,
    title: 'Tree Shakable',
  },
  {
    description:
      'Lobe Icons boasts an active community of designers and developers. Engage with us on platforms like GitHub and Discord to contribute or get support.',
    icon: GitPullRequest,
    title: 'Active Community',
  },
];

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    margin-top: -4%;
  `,
  dashboard: css`
    overflow: hidden;
    max-width: 960px;
    border: 1px solid ${token.colorBorder};
    border-radius: ${token.borderRadiusLG}px;
  `,
  segmented: css`
    border: 1px solid ${token.colorBorder};
  `,
}));

export default () => {
  const [avtive, setActive] = useState('icons');
  const { styles } = useStyles();

  return (
    <Center className={styles.container} gap={16}>
      <Segmented
        className={styles.segmented}
        onChange={(v) => setActive(v as any)}
        options={[
          { label: 'Brand Icons', value: 'icons' },
          { label: 'Brand Texts', value: 'texts' },
        ]}
        size={'large'}
        value={avtive}
      />
      {avtive === 'icons' && <Dashboard className={styles.dashboard} />}
      {avtive === 'texts' && <DashboardText className={styles.dashboard} />}
      <Features items={items} />
    </Center>
  );
};
