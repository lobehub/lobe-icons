---
nav: Components
group: Model
title: DBRX (Databricks)
atomId: Dbrx
description: https://www.databricks.com
---

## Icons

```tsx
import { Dbrx } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Dbrx size={64} />
    <Dbrx.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Dbrx } from '@lobehub/icons';

export default () => <Dbrx.Text size={48} />;
```

## Combine

```tsx
import { Dbrx } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Dbrx.Combine size={64} />
    <Dbrx.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Brands

```tsx
import { Dbrx } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Dbrx.Brand size={64} />
    <Dbrx.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Dbrx } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Dbrx.Avatar size={64} />
    <Dbrx.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Dbrx } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Dbrx.colorPrimary} />
  </Flexbox>
);
```
