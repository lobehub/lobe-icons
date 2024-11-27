---
nav: Components
group: Model
title: Flux (black forest labs)
atomId: Flux
description: https://blackforestlabs.ai
---

## Icons

```tsx
import { Flux } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Flux size={64} />;
```

## Text

```tsx
import { Flux } from '@lobehub/icons';

export default () => <Flux.Text size={48} />;
```

## Combine

```tsx
import { Flux } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Flux.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Flux } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Flux.Avatar size={64} />
    <Flux.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Flux } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Flux.colorPrimary} />
  </Flexbox>
);
```
