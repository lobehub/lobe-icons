---
nav: Components
group: Provider
title: BRIA AI
atomId: BriaAI
description: https://bria.ai
---

## Icons

```tsx
import { BriaAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <BriaAI size={64} />
    <BriaAI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { BriaAI } from '@lobehub/icons';

export default () => <BriaAI.Text size={48} />;
```

## Combine

```tsx
import { BriaAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <BriaAI.Combine size={64} />
    <BriaAI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { BriaAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <BriaAI.Avatar size={64} />
    <BriaAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { BriaAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={BriaAI.colorPrimary} />
  </Flexbox>
);
```
