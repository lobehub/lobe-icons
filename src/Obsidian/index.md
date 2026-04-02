---
nav: Components
group: Application
title: Obsidian
atomId: Obsidian
description: https://obsidian.md
---

## Icons

```tsx
import { Obsidian } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Obsidian size={64} />
    <Obsidian.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Obsidian } from '@lobehub/icons';

export default () => <Obsidian.Text size={48} />;
```

## Combine

```tsx
import { Obsidian } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Obsidian.Combine size={64} />
    <Obsidian.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Obsidian } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Obsidian.Avatar size={64} />
    <Obsidian.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Obsidian } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Obsidian.colorPrimary} />
  </Flexbox>
);
```
