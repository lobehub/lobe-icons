---
nav: Components
group: Provider
title: Cerebras
atomId: Cerebras
description: https://cerebras.ai
---

## Icons

```tsx
import { Cerebras } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Cerebras size={64} />
    <Cerebras.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Cerebras } from '@lobehub/icons';

export default () => <Cerebras.Text size={48} />;
```

## Combine

```tsx
import { Cerebras } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Cerebras.Combine size={64} />
    <Cerebras.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Brands

```tsx
import { Cerebras } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Cerebras.Brand size={64} />
    <Cerebras.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Cerebras } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Cerebras.Avatar size={64} />
    <Cerebras.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Cerebras } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Cerebras.colorPrimary} />
  </Flexbox>
);
```
