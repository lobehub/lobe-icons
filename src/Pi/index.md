---
nav: Components
group: Provider
title: Pi Agent
atomId: Pi
description: https://pi.dev
---

## Icons

```tsx
import { Pi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Pi size={64} />;
```

## Text

```tsx
import { Pi } from '@lobehub/icons';

export default () => <Pi.Text size={48} />;
```

## Combine

```tsx
import { Pi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Pi.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Pi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Pi.Avatar size={64} />
    <Pi.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Pi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Pi.colorPrimary} />
  </Flexbox>
);
```
