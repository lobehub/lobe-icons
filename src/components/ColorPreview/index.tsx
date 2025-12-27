'use client';

import { CopyButton, Flexbox, Tooltip } from '@lobehub/ui';
import { createStaticStyles, cx } from 'antd-style';
import { memo } from 'react';

const styles = createStaticStyles(({ css, cssVar }) => {
  return {
    btn: cx(
      'copy-button',
      css`
        position: absolute;
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
    <Tooltip title={color}>
      <Flexbox
        align={'center'}
        className={styles.container}
        justify={'center'}
        style={{ background: color }}
      >
        <CopyButton className={styles.btn} content={color} />
      </Flexbox>
    </Tooltip>
  );
});

export default IconPreview;
