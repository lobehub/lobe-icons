---
nav: Components
group: Model
title: Skywork (天工)
atomId: Skywork
description: https://skywork.ai
---

## Icons

```tsx
import { Skywork } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Skywork size={64} />
    <Skywork.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Skywork } from '@lobehub/icons';

export default () => <Skywork.Text size={48} />;
```

## Combine

```tsx
import { Skywork } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Skywork.Combine size={64} />
    <Skywork.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Skywork } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Skywork.Avatar size={64} />
    <Skywork.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Skywork } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Skywork.colorPrimary} />
  </Flexbox>
);
```
