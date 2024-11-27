---
nav: Components
group:
  title: Application
  order: 10
title: Poe
atomId: Poe
description: https://poe.com
---

## Icons

```tsx
import { Poe } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Poe size={64} />
    <Poe.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Poe } from '@lobehub/icons';

export default () => <Poe.Text size={48} />;
```

## Combine

```tsx
import { Poe } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Poe.Combine size={64} />
    <Poe.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Poe } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Poe.Avatar size={64} />
    <Poe.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Poe } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Poe.colorPrimary} />
  </Flexbox>
);
```
