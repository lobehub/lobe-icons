---
nav: Components
group: Application
title: Devin
atomId: Devin
description: https://devin.ai
---

## Icons

```tsx
import { Devin } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Devin size={64} />
    <Devin.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Devin } from '@lobehub/icons';

export default () => <Devin.Text size={48} />;
```

## Combine

```tsx
import { Devin } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Devin.Combine size={64} />
    <Devin.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Devin } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Devin.Avatar size={64} />
    <Devin.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Devin } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Devin.colorPrimary} />
  </Flexbox>
);
```
