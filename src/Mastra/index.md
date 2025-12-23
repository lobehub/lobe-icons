---
nav: Components
group: Application
title: Mastra
atomId: Mastra
description: https://mastra.ai
---

## Icons

```tsx
import { Mastra } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Mastra size={64} />;
```

## Text

```tsx
import { Mastra } from '@lobehub/icons';

export default () => <Mastra.Text size={48} />;
```

## Combine

```tsx
import { Mastra } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Mastra.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Mastra } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Mastra.Avatar size={64} />
    <Mastra.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Mastra } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Mastra.colorPrimary} />
  </Flexbox>
);
```
