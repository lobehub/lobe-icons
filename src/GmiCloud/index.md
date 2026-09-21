---
nav: Components
group: Provider
title: GmiCloud
atomId: GmiCloud
description: https://gmicloud.ai
---

## Icons

```tsx
import { GmiCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <GmiCloud size={64} />;
```

## Text

```tsx
import { GmiCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <GmiCloud.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { GmiCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <GmiCloud.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { GmiCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <GmiCloud.Avatar size={64} />
    <GmiCloud.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { GmiCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={GmiCloud.colorPrimary} />
  </Flexbox>
);
```
