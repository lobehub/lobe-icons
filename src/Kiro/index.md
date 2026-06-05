---
nav: Components
group: Application
title: Kiro
atomId: Kiro
description: https://kiro.dev
---

## Icons

```tsx
import { Kiro } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kiro size={64} />
    <Kiro.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Kiro } from '@lobehub/icons';

export default () => <Kiro.Text size={48} />;
```

## Combine

```tsx
import { Kiro } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Kiro.Combine size={64} />
    <Kiro.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Kiro } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kiro.Avatar size={64} />
    <Kiro.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Kiro } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Kiro.colorPrimary} />
  </Flexbox>
);
```
