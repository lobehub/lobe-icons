---
nav: Components
group: Model
title: HappyHorse
atomId: HappyHorse
description: https://happyhorse.com
---

## Icons

```tsx
import { HappyHorse } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <HappyHorse size={64} />;
```

## Text

```tsx
import { HappyHorse } from '@lobehub/icons';

export default () => <HappyHorse.Text size={48} />;
```

## Combine

```tsx
import { HappyHorse } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <HappyHorse.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { HappyHorse } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <HappyHorse.Avatar size={64} />
    <HappyHorse.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { HappyHorse } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={HappyHorse.colorPrimary} />
  </Flexbox>
);
```
