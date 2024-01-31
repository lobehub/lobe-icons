---
nav: Components
group: Icons
title: Stability (StableDiffusion)
atomId: Stability
description: https://deepmind.google/technologies/gemini
---

## Icons

```tsx
import { Stability } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Stability size={64} />
    <Stability.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Stability } from '@lobehub/icons';

export default () => <Stability.Text size={48} />;
```

## Combine

```tsx
import { Stability } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Stability.Combine size={64} />
    <Stability.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Brands

```tsx
import { Stability } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Stability.Brand size={64} />
    <Stability.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Stability } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Stability.Avatar size={64} background={Stability.colorPrimary} />
    <Stability.Avatar size={64} />
    <Stability.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Stability } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Stability.colorPrimary} />
    <ColorPreview color={Stability.colorGradient} />
  </Flexbox>
);
```
