import { ModelProvider, ProviderIcon } from '@lobehub/icons';
import { Grid } from '@lobehub/ui';

export default () => {
  return (
    <Grid gap={12} width={'100%'} wrap={'wrap'}>
      {Object.values(ModelProvider).map((provider) => (
        <ProviderIcon key={provider} provider={provider} size={32} type={'combine-color'} />
      ))}
    </Grid>
  );
};
