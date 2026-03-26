---
nav: Components
group: Provider
title: AgentVoice
atomId: AgentVoice
description: https://agentvoice.com
---

## Icons

```tsx
import { AgentVoice } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <AgentVoice size={64} />
    <AgentVoice.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AgentVoice } from '@lobehub/icons';

export default () => <AgentVoice.Text size={48} />;
```

## Combine

```tsx
import { AgentVoice } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AgentVoice.Combine size={64} />
    <AgentVoice.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AgentVoice } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <AgentVoice.Avatar size={64} />
    <AgentVoice.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AgentVoice } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AgentVoice.colorPrimary} />
  </Flexbox>
);
```
