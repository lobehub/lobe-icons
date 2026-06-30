---
nav: Components
group: Provider
title: Polza
atomId: Polza
description: https://polza.ai
---

## Icons

```tsx
import { Polza } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Polza size={64} />
    <Polza.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Polza } from '@lobehub/icons';

export default () => <Polza.Text size={48} />;
```

## Combine

```tsx
import { Polza } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Polza.Combine size={64} />
    <Polza.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Polza } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Polza.Avatar size={64} />
    <Polza.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Polza } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Polza.colorPrimary} />
  </Flexbox>
);
```
