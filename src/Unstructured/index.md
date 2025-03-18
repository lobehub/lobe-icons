---
nav: Components
group: Application
title: Unstructured
atomId: Unstructured
description: https://unstructured.io
---

## Icons

```tsx
import { Unstructured } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Unstructured size={64} />
    <Unstructured.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Unstructured } from '@lobehub/icons';

export default () => <Unstructured.Text size={48} />;
```

## Combine

```tsx
import { Unstructured } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Unstructured.Combine size={64} />
    <Unstructured.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Unstructured } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Unstructured.Avatar size={64} />
    <Unstructured.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Unstructured } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Unstructured.colorPrimary} />
  </Flexbox>
);
```
