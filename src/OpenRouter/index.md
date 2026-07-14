---
nav: Components
group: Provider
title: OpenRouter
atomId: OpenRouter
description: https://openrouter.ai
---

## Icons

```tsx
import { OpenRouter } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <OpenRouter size={64} />
    <OpenRouter.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { OpenRouter } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <OpenRouter.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { OpenRouter } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <OpenRouter.Combine size={64} />
    <OpenRouter.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { OpenRouter } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <OpenRouter.Avatar size={64} />
    <OpenRouter.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { OpenRouter } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={OpenRouter.colorPrimary} />
  </Flexbox>
);
```
