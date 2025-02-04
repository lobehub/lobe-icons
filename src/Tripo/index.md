---
nav: Components
group: Application
title: Tripo
atomId: Tripo
description: https://www.tripo3d.ai
---

## Icons

```tsx
import { Tripo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Tripo size={64} />
    <Tripo.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Tripo } from '@lobehub/icons';

export default () => <Tripo.Text size={48} />;
```

## Combine

```tsx
import { Tripo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Tripo.Combine size={64} />
    <Tripo.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Tripo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Tripo.Avatar size={64} />
    <Tripo.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Tripo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Tripo.colorPrimary} />
  </Flexbox>
);
```
