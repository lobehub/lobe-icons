---
nav: Components
group:
  title: Application
  order: 10
title: Zapier
atomId: Zapier
description: https://zapier.com
---

## Icons

```tsx
import { Zapier } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Zapier size={64} />
    <Zapier.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Zapier } from '@lobehub/icons';

export default () => <Zapier.Text size={48} />;
```

## Combine

```tsx
import { Zapier } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Zapier.Combine size={64} />
    <Zapier.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Zapier } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Zapier.Avatar size={64} />
    <Zapier.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Zapier } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Zapier.colorPrimary} />
  </Flexbox>
);
```
