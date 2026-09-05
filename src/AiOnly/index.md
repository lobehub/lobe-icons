---
nav: Components
group: Provider
title: AiOnly
atomId: AiOnly
description: https://aionly.com
---

## Icons

```tsx
import { AiOnly } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <AiOnly size={64} />
    <AiOnly.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AiOnly } from '@lobehub/icons';

export default () => <AiOnly.Text size={48} />;
```

## Combine

```tsx
import { AiOnly } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AiOnly.Combine size={64} />
    <AiOnly.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AiOnly } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <AiOnly.Avatar size={64} />
    <AiOnly.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AiOnly } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AiOnly.colorPrimary} />
  </Flexbox>
);
```
