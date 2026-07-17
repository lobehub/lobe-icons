---
nav: Components
group: Provider
title: Perceptron
atomId: Perceptron
description: https://perceptron.inc
---

## Icons

```tsx
import { Perceptron } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Perceptron size={64} />
    <Perceptron.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Perceptron } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Perceptron.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Perceptron } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Perceptron.Combine size={64} />
    <Perceptron.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Perceptron } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Perceptron.Avatar size={64} />
    <Perceptron.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Perceptron } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Perceptron.colorPrimary} />
  </Flexbox>
);
```
