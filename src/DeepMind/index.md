---
nav: Components
group: Provider
title: DeepMind (Google)
atomId: DeepMind
description: https://deepmind.google
---

## Icons

```tsx
import { DeepMind } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <DeepMind size={64} />
    <DeepMind.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { DeepMind } from '@lobehub/icons';

export default () => <DeepMind.Text size={48} />;
```

## Combine

```tsx
import { DeepMind } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <DeepMind.Combine size={64} />
    <DeepMind.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { DeepMind } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <DeepMind.Avatar size={64} />
    <DeepMind.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { DeepMind } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={DeepMind.colorPrimary} />
  </Flexbox>
);
```
