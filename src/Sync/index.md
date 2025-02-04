---
nav: Components
group: Application
title: Sync
atomId: Sync
description: https://sync.so
---

## Icons

```tsx
import { Sync } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Sync size={64} />;
```

## Text

```tsx
import { Sync } from '@lobehub/icons';

export default () => <Sync.Text size={48} />;
```

## Combine

```tsx
import { Sync } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Sync.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Sync } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Sync.Avatar size={64} />
    <Sync.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Sync } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Sync.colorPrimary} />
  </Flexbox>
);
```
