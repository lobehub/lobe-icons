---
nav: Components
group: Model
title: Kolors (快手可图)
atomId: Kolors
description: https://kolors.kuaishou.com
---

## Icons

```tsx
import { Kolors } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kolors size={64} />
    <Kolors.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Kolors } from '@lobehub/icons';

export default () => <Kolors.Text size={48} />;
```

## Combine

```tsx
import { Kolors } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Kolors.Combine size={64} />
    <Kolors.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Kolors } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kolors.Avatar size={64} />
    <Kolors.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Kolors } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Kolors.colorPrimary} />
    <ColorPreview color={Kolors.colorGradient} />
  </Flexbox>
);
```
