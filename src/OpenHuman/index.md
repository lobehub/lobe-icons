---
nav: Components
group: Application
title: OpenHuman
atomId: OpenHuman
description: https://tinyhumans.ai/openhuman
---

## Icons

```tsx
import { OpenHuman } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <OpenHuman size={64} />;
```

## Text

```tsx
import { OpenHuman } from '@lobehub/icons';

export default () => <OpenHuman.Text size={48} />;
```

## Combine

```tsx
import { OpenHuman } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <OpenHuman.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { OpenHuman } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <OpenHuman.Avatar size={64} />
    <OpenHuman.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { OpenHuman } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={OpenHuman.colorPrimary} />
  </Flexbox>
);
```
