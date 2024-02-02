import { createStyles } from 'antd-style';
import { ReactNode, memo, useRef } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

import DownloadButton from '@/components/DownloadButton';

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

export interface IconPreviewProps extends FlexboxProps {
  children: string | ReactNode;
}

const IconPreview = memo<IconPreviewProps>(({ className, children, ...rest }) => {
  const { cx, styles } = useStyles();
  const ref = useRef<HTMLDivElement>(null);
  const isString = typeof children === 'string';

  return (
    <Flexbox
      align={'center'}
      className={cx(styles.container, className)}
      flex={'none'}
      justify={'center'}
      {...rest}
    >
      {isString ? (
        <div className={styles.inner} dangerouslySetInnerHTML={{ __html: children }} ref={ref} />
      ) : (
        <div className={styles.inner} ref={ref}>
          {children}
        </div>
      )}
      <DownloadButton
        className={styles.btn}
        onClick={() => {
          const svgString = String(ref?.current?.querySelector('svg')?.outerHTML);
          const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const downloadLink = document.createElement('a');
          downloadLink.href = url;
          downloadLink.download = 'icon.svg';
          document.body.append(downloadLink);
          downloadLink.click();
          downloadLink.remove();
          URL.revokeObjectURL(url);
        }}
      />
    </Flexbox>
  );
});

export default IconPreview;
