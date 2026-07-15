---
nav: Components
group: Application
title: Agnes AI
atomId: AgnesAI
description: https://agnes-ai.com
---

## Icons

```tsx
import { AgnesAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <AgnesAI size={64} />;
```

## Text

```tsx
import { AgnesAI } from '@lobehub/icons';

export default () => <AgnesAI.Text size={48} />;
```

## Combine

```tsx
import { AgnesAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AgnesAI.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AgnesAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <AgnesAI.Avatar size={64} />
    <AgnesAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AgnesAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AgnesAI.colorPrimary} />
  </Flexbox>
);
```
