---
nav: Components
group: Application
title: Moxt
atomId: Moxt
description: https://moxt.ai
---

## Icons

```tsx
import { Moxt } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Moxt size={64} />
    <Moxt.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Moxt } from '@lobehub/icons';

export default () => <Moxt.Text size={48} />;
```

## Combine

```tsx
import { Moxt } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Moxt.Combine size={64} />
    <Moxt.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Moxt } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Moxt.Avatar size={64} />
    <Moxt.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Moxt } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Moxt.colorPrimary} />
  </Flexbox>
);
```
