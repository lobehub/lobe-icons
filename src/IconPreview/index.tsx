import { CopyButton } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { ReactNode, memo, useRef } from 'react';
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

      padding: 12px;

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
    inner: css`
      display: flex;
      flex: none;
      align-items: center;
      justify-content: center;

      width: auto;
      min-width: 72px;
      height: 72px;

      font-size: 72px;
      line-height: 1;
    `,
  };
});

export interface IconPreviewProps {
  children: string | ReactNode;
}

const IconPreview = memo<IconPreviewProps>(({ children }) => {
  const { styles } = useStyles();
  const ref = useRef<HTMLDivElement>(null);
  const isString = typeof children === 'string';

  return (
    <Flexbox align={'center'} className={styles.container} flex={'none'} justify={'center'}>
      {isString ? (
        <div className={styles.inner} dangerouslySetInnerHTML={{ __html: children }} ref={ref} />
      ) : (
        <div className={styles.inner} ref={ref}>
          {children}
        </div>
      )}
      <CopyButton
        className={styles.btn}
        content={String(ref?.current?.querySelector('svg')?.outerHTML)}
      />
    </Flexbox>
  );
});

export default IconPreview;
