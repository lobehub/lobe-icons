---
nav: Components
group:
  title: Application
  order: 10
title: DeepL
atomId: DeepL
description: https://deepl.com
---

## Icons

```tsx
import { DeepL } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <DeepL size={64} />
    <DeepL.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { DeepL } from '@lobehub/icons';

export default () => <DeepL.Text size={48} />;
```

## Combine

```tsx
import { DeepL } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <DeepL.Combine size={64} />
    <DeepL.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { DeepL } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <DeepL.Avatar size={64} />
    <DeepL.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { DeepL } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={DeepL.colorPrimary} />
  </Flexbox>
);
```
