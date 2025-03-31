---
nav: Components
group: Provider
title: CentML
atomId: CentML
description: https://centml.ai
---

## Icons

```tsx
import { CentML } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <CentML size={64} />
    <CentML.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { CentML } from '@lobehub/icons';

export default () => <CentML.Text size={48} />;
```

## Combine

```tsx
import { CentML } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CentML.Combine size={64} />
    <CentML.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Brands

```tsx
import { CentML } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CentML.Brand size={64} />
    <CentML.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { CentML } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <CentML.Avatar size={64} />
    <CentML.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { CentML } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={CentML.colorPrimary} />
  </Flexbox>
);
```
