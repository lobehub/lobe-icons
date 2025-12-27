'use client';

import { CopyButton, Flexbox } from '@lobehub/ui';
import { createStaticStyles, cx } from 'antd-style';
import { memo } from 'react';

const styles = createStaticStyles(({ css, cssVar }) => {
  return {
    btn: cx(
      'copy-button',
      css`
        position: absolute;
        inset-block-start: 4px;
        inset-inline-end: 4px;
        opacity: 0;
      `,
    ),
    container: css`
      position: relative;

      flex: none;

      width: 98px;
      height: 98px;
      border: 1px solid ${cssVar.colorBorder};
      border-radius: ${cssVar.borderRadius};

      font-family: ${cssVar.fontFamilyCode};
      line-height: 1;

      background: ${cssVar.colorBgContainer};

      &:hover {
        .copy-button {
          opacity: 1;
        }
      }
    `,
  };
});

export interface IconPreviewProps {
  color: string;
}

const IconPreview = memo<IconPreviewProps>(({ color }) => {
  return (
    <Flexbox
      align={'center'}
      className={styles.container}
      justify={'center'}
      style={{ background: color }}
    >
      <div style={{ color: '#fff' }}>{color}</div>
      <CopyButton className={styles.btn} content={color} />
    </Flexbox>
  );
});

export default IconPreview;
