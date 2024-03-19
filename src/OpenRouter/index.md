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
import { Flexbox } from 'react-layout-kit';

export default () => <OpenRouter size={64} />;
```

## Text

```tsx
import { OpenRouter } from '@lobehub/icons';

export default () => <OpenRouter.Text size={48} />;
```

## Combine

```tsx
import { OpenRouter } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <OpenRouter.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { OpenRouter } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

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
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={OpenRouter.colorPrimary} />
  </Flexbox>
);
```
