---
nav: Components
group: Provider
title: Upsate
atomId: Upsate
description: https://www.upstage.ai
---

## Icons

```tsx
import { Upsate } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Upsate size={64} />
    <Upsate.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Upsate } from '@lobehub/icons';

export default () => <Upsate.Text size={48} />;
```

## Combine

```tsx
import { Upsate } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Upsate.Combine size={64} />
    <Upsate.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Upsate } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Upsate.Avatar size={64} background={Upsate.colorPrimary} />
    <Upsate.Avatar size={64} />
    <Upsate.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Upsate } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Upsate.colorPrimary} />
  </Flexbox>
);
```
