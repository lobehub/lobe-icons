---
nav: Components
group: Application
title: Qoder
atomId: Qoder
description: https://qoder.com
---

## Icons

```tsx
import { Qoder } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Qoder size={64} />
    <Qoder.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Qoder } from '@lobehub/icons';

export default () => <Qoder.Text size={48} />;
```

## Combine

```tsx
import { Qoder } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Qoder.Combine size={64} />
    <Qoder.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Qoder } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Qoder.Avatar size={64} />
    <Qoder.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Qoder } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Qoder.colorPrimary} />
  </Flexbox>
);
```
