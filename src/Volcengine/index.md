---
nav: Components
group: Provider
title: Volcengine (火山引擎)
atomId: Volcengine
description: https://volcengine.com
---

## Icons

```tsx
import { Volcengine } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Volcengine size={64} />
    <Volcengine.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Volcengine } from '@lobehub/icons';

export default () => <Volcengine.Text size={48} />;
```

## Combine

```tsx
import { Volcengine } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Volcengine.Combine size={64} />
    <Volcengine.Combine type={'color'} size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Volcengine } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Volcengine.Avatar size={64} />
    <Volcengine.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Volcengine } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Volcengine.colorPrimary} />
  </Flexbox>
);
```
