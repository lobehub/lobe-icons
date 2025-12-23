---
nav: Components
group: Application
title: YouMind
atomId: YouMind
description: https://youmind.ai
---

## Icons

```tsx
import { YouMind } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <YouMind size={64} />;
```

## Text

```tsx
import { YouMind } from '@lobehub/icons';

export default () => <YouMind.Text size={48} />;
```

## Combine

```tsx
import { YouMind } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <YouMind.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { YouMind } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <YouMind.Avatar size={64} />
    <YouMind.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { YouMind } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={YouMind.colorPrimary} />
  </Flexbox>
);
```
