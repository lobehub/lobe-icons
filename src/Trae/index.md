---
nav: Components
group: Application
title: TRAE
atomId: Trae
description: https://trae.ai
---

## Icons

```tsx
import { Trae } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Trae size={64} />
    <Trae.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Trae } from '@lobehub/icons';

export default () => <Trae.Text size={48} />;
```

## Combine

```tsx
import { Trae } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Trae.Combine size={64} />
    <Trae.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Trae } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Trae.Avatar size={64} />
    <Trae.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Trae } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Trae.colorPrimary} />
  </Flexbox>
);
```
