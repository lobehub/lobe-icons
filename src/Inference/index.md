---
nav: Components
group: Provider
title: Inference
atomId: Inference
description: https://inference.net
---

## Icons

```tsx
import { Inference } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Inference size={64} />;
```

## Text

```tsx
import { Inference } from '@lobehub/icons';

export default () => <Inference.Text size={48} />;
```

## Combine

```tsx
import { Inference } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Inference.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Inference } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Inference.Avatar size={64} />
    <Inference.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Inference } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Inference.colorPrimary} />
  </Flexbox>
);
```
