---
nav: Components
group: Application
title: Venice
atomId: Venice
description: https://venice.ai
---

## Icons

```tsx
import { Venice } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Venice size={64} />
    <Venice.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Venice } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Venice.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Venice } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Venice.Combine size={64} />
    <Venice.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Venice } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Venice.Avatar size={64} />
    <Venice.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Venice } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Venice.colorPrimary} />
  </Flexbox>
);
```