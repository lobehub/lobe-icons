---
nav: Components
group:
  title: Application
  order: 10
title: FastGPT
atomId: FastGPT
description: https://tryfastgpt.ai
---

## Icons

```tsx
import { FastGPT } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <FastGPT size={64} />
    <FastGPT.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { FastGPT } from '@lobehub/icons';

export default () => <FastGPT.Text size={48} />;
```

## Combine

```tsx
import { FastGPT } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <FastGPT.Combine size={64} />
    <FastGPT.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { FastGPT } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <FastGPT.Avatar size={64} />
    <FastGPT.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { FastGPT } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={FastGPT.colorPrimary} />
  </Flexbox>
);
```
