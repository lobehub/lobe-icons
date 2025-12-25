import { ModelTag, modelMappings } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => {
  return (
    <Flexbox gap={8} horizontal width={'100%'} wrap={'wrap'}>
      {Object.values(modelMappings).map((item) => {
        const model = item.keywords[0].replace('^', '');
        return <ModelTag key={model} model={model} style={{ margin: 0 }} />;
      })}
    </Flexbox>
  );
};
