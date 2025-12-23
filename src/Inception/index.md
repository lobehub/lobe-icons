---
nav: Components
group: Model
title: Inception Labs
atomId: Inception
description: https://inceptionlabs.ai
---

## Icons

```tsx
import { Inception } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Inception size={64} />;
```

## Text

```tsx
import { Inception } from '@lobehub/icons';

export default () => <Inception.Text size={48} />;
```

## Combine

```tsx
import { Inception } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Inception.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Inception } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Inception.Avatar size={64} />
    <Inception.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Inception } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Inception.colorPrimary} />
  </Flexbox>
);
```
