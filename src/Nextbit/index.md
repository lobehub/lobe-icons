---
nav: Components
group: Provider
title: Nextbit
atomId: Nextbit
description: https://nextbit256.com
---

## Icons

```tsx
import { Nextbit } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Nextbit size={64} />
    <Nextbit.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Nextbit } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Nextbit.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Nextbit } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Nextbit.Combine size={64} />
    <Nextbit.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Nextbit } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Nextbit.Avatar size={64} />
    <Nextbit.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Nextbit } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Nextbit.colorPrimary} />
  </Flexbox>
);
```
