---
nav: Components
group:
  title: Application
  order: 10
title: Kimi
atomId: Kimi
description: https://kimi.moonshot.cn
---

## Icons

```tsx
import { Kimi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kimi size={64} />
    <Kimi.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Kimi } from '@lobehub/icons';

export default () => <Kimi.Text size={48} />;
```

## Combine

```tsx
import { Kimi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Kimi.Combine size={64} />
    <Kimi.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Kimi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kimi.Avatar size={64} />
    <Kimi.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Kimi } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Kimi.colorPrimary} />
  </Flexbox>
);
```
