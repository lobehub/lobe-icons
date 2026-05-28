---
nav: Components
group: Application
title: SillyTavern
atomId: SillyTavern
description: https://github.com/SillyTavern
---

## Icons

```tsx
import { SillyTavern } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <SillyTavern size={64} />
    <SillyTavern.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { SillyTavern } from '@lobehub/icons';

export default () => <SillyTavern.Text size={48} />;
```

## Combine

```tsx
import { SillyTavern } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <SillyTavern.Combine size={64} />
    <SillyTavern.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { SillyTavern } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <SillyTavern.Avatar size={64} />
    <SillyTavern.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { SillyTavern } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={SillyTavern.colorPrimary} />
  </Flexbox>
);
```
