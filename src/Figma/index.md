---
nav: Components
group:
  title: Application
  order: 10
title: Figma
atomId: Figma
description: https://figma.com
---

## Icons

```tsx
import { Figma } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Figma size={64} />
    <Figma.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Figma } from '@lobehub/icons';

export default () => <Figma.Text size={48} />;
```

## Combine

```tsx
import { Figma } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Figma.Combine size={64} />
    <Figma.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Figma } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Figma.Avatar size={64} />
    <Figma.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Figma } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Figma.colorPrimary} />
  </Flexbox>
);
```
