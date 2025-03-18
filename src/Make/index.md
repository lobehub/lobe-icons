---
nav: Components
group: Application
title: Make
atomId: Make
description: https://make.com
---

## Icons

```tsx
import { Make } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Make size={64} />
    <Make.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Make } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Make.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Make } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Make.Combine size={64} />
    <Make.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Make } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Make.Avatar size={64} />
    <Make.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Make } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Make.colorPrimary} />
  </Flexbox>
);
```
