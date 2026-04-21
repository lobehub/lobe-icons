---
nav: Components
group: Application
title: Hermes Agent
atomId: HermesAgent
description: https://hermes-agent.nousresearch.com
---

## Icons

```tsx
import { HermesAgent } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <HermesAgent size={64} />;
```

## Text

```tsx
import { HermesAgent } from '@lobehub/icons';

export default () => <HermesAgent.Text size={48} />;
```

## Combine

```tsx
import { HermesAgent } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <HermesAgent.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { HermesAgent } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <HermesAgent.Avatar size={64} />
    <HermesAgent.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { HermesAgent } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={HermesAgent.colorPrimary} />
  </Flexbox>
);
```
