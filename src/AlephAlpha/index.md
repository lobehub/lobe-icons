---
nav: Components
group: Provider
title: AlephAlpha
atomId: AlephAlpha
description: https://aleph-alpha.com
---

## Icons

```tsx
import { AlephAlpha } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <AlephAlpha size={64} />;
```

## Text

```tsx
import { AlephAlpha } from '@lobehub/icons';

export default () => <AlephAlpha.Text size={48} />;
```

## Combine

```tsx
import { AlephAlpha } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AlephAlpha.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AlephAlpha } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AlephAlpha.Avatar size={64} />
    <AlephAlpha.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AlephAlpha } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AlephAlpha.colorPrimary} />
  </Flexbox>
);
```
