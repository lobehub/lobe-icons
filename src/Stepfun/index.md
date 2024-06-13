---
nav: Components
group: Model
title: Stepfun (阶跃星辰)
atomId: Stepfun
description: https://www.stepfun.com
---

## Icons

```tsx
import { Stepfun } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Stepfun size={64} />
    <Stepfun.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Stepfun } from '@lobehub/icons';

export default () => <Stepfun.Text size={48} />;
```

## Combine

```tsx
import { Stepfun } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Stepfun.Combine size={64} />
    <Stepfun.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Stepfun } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Stepfun.Avatar size={64} background={Stepfun.colorPrimary} />
    <Stepfun.Avatar size={64} />
    <Stepfun.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Stepfun } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Stepfun.colorPrimary} />
  </Flexbox>
);
```
