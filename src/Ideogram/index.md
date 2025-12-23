---
nav: Components
group: Application
title: Ideogram
atomId: Ideogram
description: https://ideogram.ai
---

## Icons

```tsx
import { Ideogram } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Ideogram size={64} />;
```

## Text

```tsx
import { Ideogram } from '@lobehub/icons';

export default () => <Ideogram.Text size={48} />;
```

## Combine

```tsx
import { Ideogram } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Ideogram.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Ideogram } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Ideogram.Avatar size={64} />
    <Ideogram.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Ideogram } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Ideogram.colorPrimary} />
  </Flexbox>
);
```
