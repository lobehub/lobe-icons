'use client';

import { Highlighter } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css }) => {
  return {
    code: css`
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
  svg: string;
  title: string;
  viewbox: string;
}

const Preview = memo<PreviewProps>(({ svg, title, viewbox }) => {
  const { styles } = useStyles();

  return (
    <Flexbox flex={'none'} gap={16} style={{ position: 'relative', width: '100%' }}>
      <Flexbox align={'center'} gap={8} horizontal>
        <h3 style={{ lineHeight: 1, margin: 0 }}>{title}</h3>
      </Flexbox>
      <Highlighter className={styles.code} language={'tsx'}>
        {`import { forwardRef } from 'react';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      viewBox="${viewbox}"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      ${svg}
    </svg>
  );
});

export default Icon;
`}
      </Highlighter>
    </Flexbox>
  );
});

export default Preview;
