'use client';

import { ActionIcon, Block, Center, CopyButton, Flexbox, Text } from '@lobehub/ui';
import { createStaticStyles, cx } from 'antd-style';
import { Link } from 'dumi';
import { DownloadIcon, SearchIcon } from 'lucide-react';
import { readableColor } from 'polished';
import { ReactNode, memo, useCallback, useRef } from 'react';

import { customKebabCase } from '@/components/Dashboard/utils';

const styles = createStaticStyles(({ css, cssVar }) => {
  const colorText = cx(
    'color-text',
    css`
      display: block;
    `,
  );
  const copy = cx(
    'copy',
    css`
      z-index: 1;
      display: none !important;
    `,
  );
  return {
    card: css`
      position: relative;
      overflow: hidden;
    `,
    color: css`
      border-inline-end: 1px solid ${cssVar.colorBorderSecondary};
      font-family: ${cssVar.fontFamilyCode};

      &:hover {
        .color-text {
          display: none;
        }

        .copy {
          display: flex !important;
        }
      }
    `,
    colorText,
    copy,
    row: css`
      border-block-start: 1px solid ${cssVar.colorFillSecondary};
    `,
    title: css`
      margin: 0;
      font-size: 16px;
      font-weight: bold;
    `,
    titleRow: css`
      margin-block-start: -8px;

      &:hover {
        .copy {
          display: flex;
        }
      }
    `,
  };
});

interface IconItemProps {
  children: ReactNode;
  color: string;
  id: string;
  title: string;
}

const IconItem = memo<IconItemProps>(({ children, title, color, id }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleDownload = useCallback((iconId: string) => {
    const svgString = String(ref?.current?.querySelector('svg')?.outerHTML);
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `${iconId.toLowerCase()}.svg`;
    document.body.append(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <Block className={styles.card} variant={'outlined'}>
      <Link style={{ color: 'inherit' }} to={`/components/${customKebabCase(id)}`}>
        <Center height={96} ref={ref} style={{ position: 'relative' }} width={'100%'}>
          {children}
        </Center>
      </Link>
      <Flexbox
        align={'center'}
        className={styles.titleRow}
        horizontal
        justify={'space-between'}
        paddingBlock={8}
        paddingInline={12}
        width={'100%'}
      >
        <Text as={'h2'} className={styles.title} ellipsis>
          {title}
        </Text>
        <CopyButton content={title} size={'small'} />
      </Flexbox>
      <Flexbox align={'center'} className={styles.row} horizontal>
        <Center
          className={styles.color}
          flex={1}
          height={32}
          horizontal
          paddingInline={12}
          style={{ background: color, color: readableColor(color) }}
        >
          <span className={styles.colorText}>{color.toUpperCase()}</span>
          <CopyButton
            className={styles.copy}
            color={readableColor(color)}
            content={color.toUpperCase()}
            size={'small'}
          />
        </Center>
        <Flexbox flex={1} horizontal paddingInline={12}>
          <Center flex={1} height={32}>
            <a
              href={`https://lobehub.com/icons/${customKebabCase(id)}`}
              rel="noreferrer"
              style={{ color: 'inherit' }}
              target={'_blank'}
            >
              <ActionIcon icon={SearchIcon} size={'small'} />
            </a>
          </Center>
          <Center flex={1} height={32} onClick={() => handleDownload(id)}>
            <ActionIcon icon={DownloadIcon} size={'small'} />
          </Center>
        </Flexbox>
      </Flexbox>
    </Block>
  );
});

export default IconItem;
