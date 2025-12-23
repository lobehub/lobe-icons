---
nav: Components
group: Model
title: Ai2
atomId: Ai2
description: https://allenai.org/
---

## Icons

```tsx
import { Ai2 } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Ai2 size={64} />
    <Ai2.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Ai2 } from '@lobehub/icons';

export default () => <Ai2.Text size={48} />;
```

## Combine

```tsx
import { Ai2 } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Ai2.Combine size={64} />
    <Ai2.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Ai2 } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Ai2.Avatar size={64} />
    <Ai2.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Ai2 } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Ai2.colorPrimary} />
  </Flexbox>
);
```
