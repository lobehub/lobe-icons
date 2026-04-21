---
nav: Components
group: Provider
title: SpeedAI
atomId: SpeedAI
description: https://speedai.cn
---

## Icons

```tsx
import { SpeedAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <SpeedAI size={64} />
    <SpeedAI.Color size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { SpeedAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <SpeedAI.Avatar size={64} />
    <SpeedAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { SpeedAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={SpeedAI.colorPrimary} />
  </Flexbox>
);
```
