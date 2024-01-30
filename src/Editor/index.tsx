import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { Flexbox } from 'react-layout-kit';

import Preview from './Preview';
import { svgIcon } from './data';
import { defaultPlugins } from './svgo';

export default () => {
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

  return (
    <StoryBook levaStore={levaStore} style={{ position: 'relative' }}>
      <Flexbox
        gap={32}
        style={{
          flexWrap: 'wrap',
          height: '100%',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
        }}
      >
        <Preview svg={svg} title={'Original'} />
        <Preview config={config} svg={svg} title={'Compression'} />
        <Preview config={{ ...config, ...removeColor }} svg={svg} title={'Monochrome'} />
      </Flexbox>
    </StoryBook>
  );
};
