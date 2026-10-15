---
nav: Components
group: Provider
title: 5dive
atomId: FiveDive
description: https://5dive.ai
---

## Icons

```tsx
import { FiveDive } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <FiveDive size={64} />
    <FiveDive.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { FiveDive } from '@lobehub/icons';

export default () => <FiveDive.Text size={64} />;
```

## Combine

```tsx
import { FiveDive } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <FiveDive.Combine size={64} />
    <FiveDive.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { FiveDive } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <FiveDive.Avatar size={64} />
    <FiveDive.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { FiveDive } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={FiveDive.colorPrimary} />
  </Flexbox>
);
```
