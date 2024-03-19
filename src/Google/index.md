---
nav: Components
group: Provider
title: Google
atomId: Google
description: https://google.com
---

## Icons

```tsx
import { Google } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Google size={64} />
    <Google.Color size={64} />
  </Flexbox>
);
```

## Brands

```tsx
import { Google } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Google.Brand size={64} />
    <Google.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Google } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Google.Avatar size={64} />
    <Google.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Google } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Google.colorPrimary} />
  </Flexbox>
);
```
