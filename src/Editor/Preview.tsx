import { Highlighter, Tag } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo, useCallback, useEffect, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { IconPreview } from '@/index';

import SvgoClient, { type SvgoConfig } from './svgo';

const useStyles = createStyles(({ css }) => {
  return {
    code: css`
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
  config?: SvgoConfig;
  svg: string;
  title: string;
}

const Preview = memo<PreviewProps>(({ svg, config, title }) => {
  const [newSvgIcon, setNewSvgIcon] = useState<string>();
  const { styles } = useStyles();
  const newSvg = useCallback(
    async (svgoInstance: any) => {
      const data = await svgoInstance.optimize(svg);
      setNewSvgIcon(data);
    },
    [svg],
  );

  useEffect(() => {
    if (config) {
      const svgoInstance = new SvgoClient(config);
      newSvg(svgoInstance);
    } else {
      setNewSvgIcon(svg);
    }
  }, [config, svg]);

  return (
    <Flexbox flex={1} gap={16} style={{ position: 'relative', width: '100%' }}>
      <Flexbox align={'center'} gap={8} horizontal>
        <h2 style={{ lineHeight: 1, margin: 0 }}>{title}</h2>
        {config && newSvgIcon && (
          <Tag>{-Math.floor((1 - newSvgIcon.length / svg.length) * 100)}%</Tag>
        )}
      </Flexbox>
      <Flexbox gap={8} horizontal>
        <IconPreview>{newSvgIcon}</IconPreview>
        <Highlighter className={styles.code} language={'html'} type={'ghost'}>
          {newSvgIcon || ''}
        </Highlighter>
      </Flexbox>
    </Flexbox>
  );
});

export default Preview;
