---
nav: Components
group: Provider
title: Baseten
atomId: Baseten
description: https://baseten.co
---

## Icons

```tsx
import { Baseten } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Baseten size={64} />;
```

## Text

```tsx
import { Baseten } from '@lobehub/icons';

export default () => <Baseten.Text size={48} />;
```

## Combine

```tsx
import { Baseten } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Baseten.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Baseten } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Baseten.Avatar size={64} />
    <Baseten.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Baseten } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Baseten.colorPrimary} />
  </Flexbox>
);
```
