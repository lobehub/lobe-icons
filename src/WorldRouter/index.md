---
nav: Components
group: Provider
title: WorldRouter
atomId: WorldRouter
description: https://worldrouter.ai
---

## Icons

```tsx
import { WorldRouter } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <WorldRouter size={64} />;
```

## Text

```tsx
import { WorldRouter } from '@lobehub/icons';

export default () => <WorldRouter.Text size={48} />;
```

## Combine

```tsx
import { WorldRouter } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <WorldRouter.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { WorldRouter } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <WorldRouter.Avatar size={64} />
    <WorldRouter.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { WorldRouter } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={WorldRouter.colorPrimary} />
  </Flexbox>
);
```
