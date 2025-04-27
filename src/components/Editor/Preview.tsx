import { Highlighter, Tag } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Ref, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import IconPreview from '@/components/IconPreview';

const useStyles = createStyles(({ css }) => {
  return {
    code: css`
      flex: 1;
      height: 96px;

      pre {
        padding: 8px !important;
      }

      code {
        font-size: 12px;
        text-wrap: initial;
      }
    `,
  };
});

interface PreviewProps {
  precent?: string;
  ref?: Ref<HTMLDivElement>;
  svg: string;
  title: string;
}

const Preview = memo<PreviewProps>(({ svg, title, precent }) => {
  const { styles } = useStyles();

  return (
    <Flexbox flex={'none'} gap={16} style={{ position: 'relative', width: '100%' }}>
      <Flexbox align={'center'} gap={8} horizontal>
        <h3 style={{ lineHeight: 1, margin: 0 }}>{title}</h3>
        {precent && <Tag>{precent}</Tag>}
      </Flexbox>
      <Flexbox gap={8} horizontal>
        <IconPreview>{svg}</IconPreview>
        <Highlighter className={styles.code} language={'tsx'}>
          {svg}
        </Highlighter>
      </Flexbox>
    </Flexbox>
  );
});

export default Preview;
