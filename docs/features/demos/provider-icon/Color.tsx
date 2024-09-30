import { ModelProvider, ProviderIcon } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => {
  return (
    <Flexbox gap={8} horizontal width={'100%'} wrap={'wrap'}>
      {Object.values(ModelProvider).map((provider) => (
        <ProviderIcon key={provider} provider={provider} size={48} type={'color'} />
      ))}
    </Flexbox>
  );
};
