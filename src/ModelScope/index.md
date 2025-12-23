---
nav: Components
group: Provider
title: ModelScope (魔搭)
atomId: ModelScope
description: https://modelscope.cn
---

## Icons

```tsx
import { ModelScope } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <ModelScope size={64} />
    <ModelScope.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { ModelScope } from '@lobehub/icons';

export default () => <ModelScope.Text size={48} />;
```

## Combine

```tsx
import { ModelScope } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <ModelScope.Combine size={64} />
    <ModelScope.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { ModelScope } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <ModelScope.Avatar size={64} background={ModelScope.colorPrimary} />
    <ModelScope.Avatar size={64} />
    <ModelScope.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { ModelScope } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={ModelScope.colorPrimary} />
  </Flexbox>
);
```
