---
nav: Components
group: Application
title: Recraft
atomId: Recraft
description: https://recraft.ai
---

## Icons

```tsx
import { Recraft } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Recraft size={64} />;
```

## Text

```tsx
import { Recraft } from '@lobehub/icons';

export default () => <Recraft.Text size={48} />;
```

## Combine

```tsx
import { Recraft } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Recraft.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Recraft } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Recraft.Avatar size={64} />
    <Recraft.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Recraft } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Recraft.colorPrimary} />
  </Flexbox>
);
```
