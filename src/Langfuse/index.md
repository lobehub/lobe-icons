---
nav: Components
group: Application
title: Langfuse
atomId: Langfuse
description: https://langfuse.com
---

## Icons

```tsx
import { Langfuse } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Langfuse size={64} />
    <Langfuse.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Langfuse } from '@lobehub/icons';

export default () => <Langfuse.Text size={48} />;
```

## Combine

```tsx
import { Langfuse } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Langfuse.Combine size={64} />
    <Langfuse.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Langfuse } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Langfuse.Avatar size={64} />
    <Langfuse.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Langfuse } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Langfuse.colorPrimary} />
  </Flexbox>
);
```
