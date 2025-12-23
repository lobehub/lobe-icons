---
nav: Components
group: Provider
title: Microsoft Azure
atomId: Azure
description: https://azure.microsoft.com
---

## Icons

```tsx
import { Azure } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Azure size={64} />
    <Azure.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Azure } from '@lobehub/icons';

export default () => <Azure.Text size={48} />;
```

## Combine

```tsx
import { Azure } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Azure.Combine size={64} />
    <Azure.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Azure } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Azure.Avatar size={64} />
    <Azure.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Azure } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Azure.colorPrimary} />
  </Flexbox>
);
```
