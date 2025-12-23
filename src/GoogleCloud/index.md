---
nav: Components
group: Provider
title: GoogleCloud
atomId: GoogleCloud
description: https://cloud.google.com
---

## Icons

```tsx
import { GoogleCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <GoogleCloud size={64} />
    <GoogleCloud.Color size={64} />
  </Flexbox>
);
```

## Brands

```tsx
import { GoogleCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <GoogleCloud.Brand size={64} />
    <GoogleCloud.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { GoogleCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <GoogleCloud.Avatar size={64} />
    <GoogleCloud.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { GoogleCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={GoogleCloud.colorPrimary} />
  </Flexbox>
);
```
