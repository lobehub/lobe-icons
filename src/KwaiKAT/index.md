---
nav: Components
group: Model
title: KwaiKAT (KAT-Coder)
atomId: KwaiKAT
description: https://streamlake.ai/product/kat-coder
---

## Icons

```tsx
import { KwaiKAT } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <KwaiKAT size={64} />;
```

## Text

```tsx
import { KwaiKAT } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <KwaiKAT.Text size={48} />
    <KwaiKAT.TextColor size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { KwaiKAT } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <KwaiKAT.Combine size={64} />
    <KwaiKAT.Combine type={'color'} size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { KwaiKAT } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <KwaiKAT.Avatar size={64} />
    <KwaiKAT.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { KwaiKAT } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={KwaiKAT.colorPrimary} />
  </Flexbox>
);
```
