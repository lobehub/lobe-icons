---
nav: Components
group: Model
title: Kwaipilot
atomId: Kwaipilot
description: https://kwaipilot.ai/
---

## Icons

```tsx
import { Kwaipilot } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kwaipilot size={64} />
    <Kwaipilot.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Kwaipilot } from '@lobehub/icons';

export default () => <Kwaipilot.Text size={48} />;
```

## Combine

```tsx
import { Kwaipilot } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Kwaipilot.Combine size={64} />
    <Kwaipilot.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Kwaipilot } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kwaipilot.Avatar size={64} />
    <Kwaipilot.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Kwaipilot } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Kwaipilot.colorPrimary} />
  </Flexbox>
);
```
