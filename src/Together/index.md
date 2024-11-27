---
nav: Components
group: Provider
title: together.ai
atomId: Together
description: https://www.together.ai
---

## Icons

```tsx
import { Together } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Together size={64} />
    <Together.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Together } from '@lobehub/icons';

export default () => <Together.Text size={48} />;
```

## Combine

```tsx
import { Together } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Together.Combine size={64} />
    <Together.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Brands

```tsx
import { Together } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Together.Brand size={64} />
    <Together.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Together } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Together.Avatar size={64} />
    <Together.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Together } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Together.colorPrimary} />
  </Flexbox>
);
```
