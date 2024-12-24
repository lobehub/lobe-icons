---
nav: Components
group: Provider
title: Fal
atomId: Fal
description: https://fal.ai
---

## Icons

```tsx
import { Fal } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Fal size={64} />;
```

## Text

```tsx
import { Fal } from '@lobehub/icons';

export default () => <Fal.Text size={48} />;
```

## Combine

```tsx
import { Fal } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Fal.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Fal } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Fal.Avatar size={64} />
    <Fal.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Fal } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Fal.colorPrimary} />
  </Flexbox>
);
```
