---
nav: Components
group: Provider
title: New API
atomId: NewAPI
description: https://newapi.ai
---

## Icons

```tsx
import { NewAPI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <NewAPI size={64} />
    <NewAPI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { NewAPI } from '@lobehub/icons';

export default () => <NewAPI.Text size={64} />;
```

## Combine

```tsx
import { NewAPI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <NewAPI.Combine size={64} />
    <NewAPI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { NewAPI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <NewAPI.Avatar size={64} />
    <NewAPI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { NewAPI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={NewAPI.colorPrimary} />
  </Flexbox>
);
```
