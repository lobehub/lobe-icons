---
nav: Components
group: Model
title: Grok (xAI)
atomId: Grok
description: https://grok.x.ai
---

## Icons

```tsx
import { Grok } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Grok size={64} />;
```

## Text

```tsx
import { Grok } from '@lobehub/icons';

export default () => <Grok.Text size={48} />;
```

## Combine

```tsx
import { Grok } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Grok.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Grok } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Grok.Avatar size={64} />
    <Grok.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Grok } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Grok.colorPrimary} />
  </Flexbox>
);
```
