import { ModelProvider, ProviderIcon } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => {
  return (
    <Flexbox gap={16} horizontal width={'100%'} wrap={'wrap'}>
      {Object.values(ModelProvider).map((provider) => (
        <ProviderIcon key={provider} provider={provider} size={48} type={'color'} />
      ))}
    </Flexbox>
  );
};
