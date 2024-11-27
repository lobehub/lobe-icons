---
nav: Components
group: Provider
title: Vercel
atomId: Vercel
description: https://sdk.vercel.ai
---

## Icons

```tsx
import { Vercel } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Vercel size={64} />;
```

## Text

```tsx
import { Vercel } from '@lobehub/icons';

export default () => <Vercel.Text size={48} />;
```

## Combine

```tsx
import { Vercel } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Vercel.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Vercel } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Vercel.Avatar size={64} />
    <Vercel.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Vercel } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Vercel.colorPrimary} />
  </Flexbox>
);
```
