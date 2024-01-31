import { CopyButton, Tooltip } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css, token, cx }) => {
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

      background: ${token.colorBgContainer};
      border: 1px solid ${token.colorBorder};
      border-radius: ${token.borderRadius}px;

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
  const { styles } = useStyles();

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
