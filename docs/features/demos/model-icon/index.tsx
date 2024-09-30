import { ModelIcon, modelMappings } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => {
  return (
    <Flexbox gap={16} horizontal width={'100%'} wrap={'wrap'}>
      {Object.values(modelMappings).map((item) => {
        const model = item.keywords[0].replace('^', '');
        return <ModelIcon key={model} model={model} size={48} />;
      })}
    </Flexbox>
  );
};
