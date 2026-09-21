---
nav: Components
group: Provider
title: Chutes
atomId: Chutes
description: https://chutes.ai
---

## Icons

```tsx
import { Chutes } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Chutes size={64} />;
```

## Text

```tsx
import { Chutes } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Chutes.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Chutes } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Chutes.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Chutes } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Chutes.Avatar size={64} />
    <Chutes.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Chutes } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Chutes.colorPrimary} />
  </Flexbox>
);
```
