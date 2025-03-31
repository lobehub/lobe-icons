---
nav: Components
group: Provider
title: Anyscale
atomId: Anyscale
description: https://anyscale.com
---

## Icons

```tsx
import { Anyscale } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Anyscale size={64} />
    <Anyscale.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Anyscale } from '@lobehub/icons';

export default () => <Anyscale.Text size={48} />;
```

## Combine

```tsx
import { Anyscale } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Anyscale.Combine size={64} />
    <Anyscale.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Anyscale } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Anyscale.Avatar size={64} />
    <Anyscale.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Anyscale } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Anyscale.colorPrimary} />
  </Flexbox>
);
```
