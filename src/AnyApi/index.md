---
nav: Components
group: Provider
title: AnyAPI
atomId: AnyAPI
description: https://anyapi.ai
---

## Icons

```tsx
import { AnyApi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <AnyApi size={64} />
    <AnyApi.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AnyApi } from '@lobehub/icons';

export default () => <AnyApi.Text size={48} />;
```

## Combine

```tsx
import { AnyApi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AnyApi.Combine size={64} />
    <AnyApi.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AnyApi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <AnyApi.Avatar size={64} />
    <AnyApi.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AnyApi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AnyApi.colorPrimary} />
  </Flexbox>
);
```
