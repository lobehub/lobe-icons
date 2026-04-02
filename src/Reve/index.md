---
nav: Components
group: Model
title: Reve
atomId: Reve
description: https://app.reve.com
---

## Icons

```tsx
import { Reve } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Reve size={64} />;
```

## Text

```tsx
import { Reve } from '@lobehub/icons';

export default () => <Reve.Text size={48} />;
```

## Combine

```tsx
import { Reve } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Reve.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Reve } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Reve.Avatar size={64} />
    <Reve.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Reve } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Reve.colorPrimary} />
  </Flexbox>
);
```
