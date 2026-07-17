---
nav: Components
group: Provider
title: Inceptron
atomId: Inceptron
description: https://inceptron.io
---

## Icons

```tsx
import { Inceptron } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Inceptron size={64} />
    <Inceptron.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Inceptron } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Inceptron.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Inceptron } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Inceptron.Combine size={64} />
    <Inceptron.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Inceptron } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Inceptron.Avatar size={64} />
    <Inceptron.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Inceptron } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Inceptron.colorPrimary} />
  </Flexbox>
);
```
