import { CopyButton } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css, token, cx }) => {
  return {
    btn: cx(
      'copy-button',
      css`
        position: absolute;
        top: 4px;
        right: 4px;
        opacity: 0;
      `,
    ),
    container: css`
      position: relative;

      flex: none;

      width: 98px;
      height: 98px;

      font-family: ${token.fontFamilyCode};
      line-height: 1;

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
