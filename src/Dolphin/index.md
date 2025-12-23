---
nav: Components
group: Model
title: Dolphin (dphnAI)
atomId: Dolphin
description: https://dphn.ai
---

## Icons

```tsx
import { Dolphin } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Dolphin size={64} />;
```

## Text

```tsx
import { Dolphin } from '@lobehub/icons';

export default () => <Dolphin.Text size={48} />;
```

## Combine

```tsx
import { Dolphin } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Dolphin.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Dolphin } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Dolphin.Avatar size={64} />
    <Dolphin.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Dolphin } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Dolphin.colorPrimary} />
  </Flexbox>
);
```
