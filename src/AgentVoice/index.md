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

export default () => <AgentVoice size={64} />;
```

## Color

```tsx
import { AgentVoice } from '@lobehub/icons';

export default () => <AgentVoice.Color size={64} />;
```

## Text

```tsx
import { AgentVoice } from '@lobehub/icons';

export default () => <AgentVoice.Text size={48} />;
```

## Combine

```tsx
import { AgentVoice } from '@lobehub/icons';

export default () => <AgentVoice.Combine size={64} />;
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
