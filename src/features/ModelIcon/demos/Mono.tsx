import { ModelIcon, modelMappings } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => {
  return (
    <Flexbox horizontal gap={16} width={'100%'} wrap={'wrap'}>
      {Object.values(modelMappings).map((item) => {
        const model = item.keywords[0].replace('^', '');
        return <ModelIcon key={model} model={model} size={48} type={'mono'} />;
      })}
    </Flexbox>
  );
};
