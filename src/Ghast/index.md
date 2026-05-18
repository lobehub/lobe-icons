---
nav: Components
group: Application
title: Ghast
atomId: Ghast
description: https://ghast.trapezohe.ai
---

## Icons

```tsx
import { Ghast } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Ghast size={64} />
    <Ghast.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Ghast } from '@lobehub/icons';

export default () => <Ghast.Text size={48} />;
```

## Combine

```tsx
import { Ghast } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Ghast.Combine size={64} />
    <Ghast.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Ghast } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Ghast.Avatar size={64} />
    <Ghast.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Ghast } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Ghast.colorPrimary} />
  </Flexbox>
);
```
