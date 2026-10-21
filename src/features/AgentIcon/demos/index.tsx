import { AgentIcon, agentMappings } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => {
  return (
    <Flexbox horizontal gap={16} width={'100%'} wrap={'wrap'}>
      {Object.values(agentMappings).map((item) => {
        const agent = item.keywords[0].replace('^', '');
        return <AgentIcon agent={agent} key={agent} size={48} />;
      })}
    </Flexbox>
  );
};
