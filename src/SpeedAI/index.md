---
nav: Components
group: Provider
title: SpeedAI
atomId: SpeedAI
description: https://speedai.com
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

## Text

```tsx
import { SpeedAI } from '@lobehub/icons';

export default () => <SpeedAI.Text size={48} />;
```

## Combine

```tsx
import { SpeedAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <SpeedAI.Combine size={64} />
    <SpeedAI.Combine size={64} type={'color'} />
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
