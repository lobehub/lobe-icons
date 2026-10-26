---
nav: Components
group: Provider
title: Everruns
atomId: Everruns
description: https://everruns.com
---

## Icons

```tsx
import { Everruns } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Everruns size={64} />
    <Everruns.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Everruns } from '@lobehub/icons';

export default () => <Everruns.Text size={48} />;
```

## Combine

```tsx
import { Everruns } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Everruns.Combine size={64} />
    <Everruns.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Everruns } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Everruns.Avatar size={64} />
    <Everruns.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Everruns } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Everruns.colorPrimary} />
  </Flexbox>
);
```
