import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { useEffect, useRef, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useSvgo } from '@/components/Editor/useSvgo';

import Color from './Color';
import Mono from './Mono';
import Preview from './Preview';
import { svgIcon } from './data';
import { defaultPlugins } from './svgo';

const useStyles = createStyles(({ css, token }) => {
  return {
    container: css`
      border: 1px solid ${token.colorBorder};
      border-radius: ${token.borderRadius}px;
    `,
  };
});
export default () => {
  const colorRef = useRef<HTMLDivElement>(null);
  const monoRef = useRef<HTMLDivElement>(null);
  const [viewbox, setViewbox] = useState<string>('0 0 24 24');
  const [colorSvg, setColorSvg] = useState<string>('');
  const [monoSvg, setMonoSvg] = useState<string>('');
  const { styles } = useStyles();
  const levaStore = useCreateStore();
  const { svg } = useControls(
    {
      svg: {
        rows: true,
        value: svgIcon,
      },
    },
    { store: levaStore },
  );
  const config = useControls('Config', defaultPlugins, { collapsed: true }, { store: levaStore });

  const removeColor = {
    addAttributesToSVGElement: {
      attribute: {
        'fill': 'currentColor',
        'fill-rule': 'evenodd',
      },
    },
    collapseGroups: true,
    removeAttrs: {
      attrs: ['fill', 'color', 'stroke', 'stroke-width', 'fill-rule'],
    },
  };

  const compression = useSvgo(svg, config);
  const mono = useSvgo(svg, { ...config, ...removeColor });

  useEffect(() => {
    if (mono.isLoading) return setMonoSvg('loading...');
    setMonoSvg(monoRef?.current?.querySelector('svg')?.innerHTML || '');
  }, [mono]);

  useEffect(() => {
    if (compression.isLoading) return setColorSvg('loading...');
    setColorSvg(colorRef?.current?.querySelector('svg')?.innerHTML || '');
    const viewBox = colorRef?.current?.querySelector('svg')?.viewBox.baseVal;
    if (viewBox) {
      setViewbox(`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
    }
  }, [compression]);

  return (
    <StoryBook className={styles.container} levaStore={levaStore} style={{ position: 'relative' }}>
      <Flexbox gap={32} style={{ overflow: 'hidden', width: '100%' }}>
        <Preview svg={svg} title={'Original'} />
        <Preview
          precent={compression.precent}
          ref={colorRef}
          svg={compression.svg}
          title={'Compression'}
        />
        <Preview precent={mono.precent} ref={monoRef} svg={mono.svg} title={'Monochrome'} />
        <Mono svg={monoSvg} title={'Mono'} viewbox={viewbox} />
        <Color svg={colorSvg} title={'Color'} viewbox={viewbox} />
      </Flexbox>
    </StoryBook>
  );
};
