---
nav: Components
group: Model
title: Liquid
atomId: Liquid
description: https://liquid.ai
---

## Icons

```tsx
import { Liquid } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Liquid size={64} />;
```

## Text

```tsx
import { Liquid } from '@lobehub/icons';

export default () => <Liquid.Text size={48} />;
```

## Combine

```tsx
import { Liquid } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Liquid.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Liquid } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Liquid.Avatar size={64} />
    <Liquid.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Liquid } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Liquid.colorPrimary} />
  </Flexbox>
);
```
