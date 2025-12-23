---
nav: Components
group: Provider
title: StreamLake
atomId: StreamLake
description: https://streamlake.ai
---

## Icons

```tsx
import { StreamLake } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <StreamLake size={64} />
    <StreamLake.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { StreamLake } from '@lobehub/icons';

export default () => <StreamLake.Text size={64} />;
```

## Combine

```tsx
import { StreamLake } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <StreamLake.Combine size={64} />
    <StreamLake.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { StreamLake } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <StreamLake.Avatar size={64} />
    <StreamLake.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { StreamLake } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={StreamLake.colorPrimary} />
  </Flexbox>
);
```
