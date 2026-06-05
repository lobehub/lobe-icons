---
nav: Components
group: Application
title: Slock
atomId: Slock
description: https://slock.ai
---

## Icons

```tsx
import { Slock } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Slock size={64} />;
```

## Text

```tsx
import { Slock } from '@lobehub/icons';

export default () => <Slock.Text size={48} />;
```

## Combine

```tsx
import { Slock } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Slock.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Slock } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Slock.Avatar size={64} />
    <Slock.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Slock } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Slock.colorPrimary} />
  </Flexbox>
);
```
