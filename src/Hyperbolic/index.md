---
nav: Components
group: Provider
title: Hyperbolic
atomId: Hyperbolic
description: https://hyperbolic.xyz
---

## Icons

```tsx
import { Hyperbolic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Hyperbolic size={64} />
    <Hyperbolic.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Hyperbolic } from '@lobehub/icons';

export default () => <Hyperbolic.Text size={48} />;
```

## Combine

```tsx
import { Hyperbolic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Hyperbolic.Combine size={64} />
    <Hyperbolic.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Hyperbolic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Hyperbolic.Avatar size={64} />
    <Hyperbolic.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Hyperbolic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Hyperbolic.colorPrimary} />
  </Flexbox>
);
```
