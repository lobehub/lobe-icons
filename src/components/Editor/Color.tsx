'use client';

import { Flexbox, Highlighter } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';

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
  textMode?: boolean;
  title: string;
  viewbox: string;
}

const Preview = memo<PreviewProps>(({ svg, title, viewbox, textMode }) => {
  const { styles } = useStyles();
  const sizeAttributes = textMode
    ? `height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}`
    : `height={size}
      style={{ flex: 'none', lineHeight: 1, ...style }}
      width={size}`;

  return (
    <Flexbox flex={'none'} gap={16} style={{ position: 'relative', width: '100%' }}>
      <Flexbox align={'center'} gap={8} horizontal>
        <h3 style={{ lineHeight: 1, margin: 0 }}>{title}</h3>
      </Flexbox>
      <Highlighter className={styles.code} language={'tsx'}>
        {`'use client';

import { memo } from 'react';
import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = memo(({ size = '1em', style, ...rest }) => {
  return (
    <svg
      ${sizeAttributes}
      viewBox="${viewbox}"
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
