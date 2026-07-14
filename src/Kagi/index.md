---
nav: Components
group: Provider
title: Kagi
atomId: Kagi
description: https://kagi.com
---

## Icons

```tsx
import { Kagi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Kagi size={64} />;
```

## Text

```tsx
import { Kagi } from '@lobehub/icons';

export default () => <Kagi.Text size={48} />;
```

## Combine

```tsx
import { Kagi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Kagi.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Kagi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kagi.Avatar size={64} />
    <Kagi.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Kagi } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Kagi.colorPrimary} />
  </Flexbox>
);
```
