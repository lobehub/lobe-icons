---
nav: Components
group: Provider
title: Xinference
atomId: Xinference
description: https://github.com/xorbitsai/inference
---

## Icons

```tsx
import { Xinference } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Xinference size={64} />
    <Xinference.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Xinference } from '@lobehub/icons';

export default () => <Xinference.Text size={48} />;
```

## Combine

```tsx
import { Xinference } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Xinference.Combine size={64} />
    <Xinference.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Xinference } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Xinference.Avatar size={64} />
    <Xinference.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Xinference } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Xinference.colorPrimary} />
  </Flexbox>
);
```
