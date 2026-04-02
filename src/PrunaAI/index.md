---
nav: Components
group: Model
title: Pruna AI
atomId: PrunaAI
description: https://pruna.ai
---

## Icons

```tsx
import { PrunaAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <PrunaAI size={64} />
    <PrunaAI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { PrunaAI } from '@lobehub/icons';

export default () => <PrunaAI.Text size={48} />;
```

## Combine

```tsx
import { PrunaAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <PrunaAI.Combine size={64} />
    <PrunaAI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { PrunaAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <PrunaAI.Avatar size={64} />
    <PrunaAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { PrunaAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={PrunaAI.colorPrimary} />
  </Flexbox>
);
```
