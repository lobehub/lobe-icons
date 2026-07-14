---
nav: Components
group: Provider
title: Anspire
atomId: Anspire
description: https://anspire.ai
---

## Icons

```tsx
import { Anspire } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Anspire size={64} />
    <Anspire.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Anspire } from '@lobehub/icons';

export default () => <Anspire.Text size={48} />;
```

## Combine

```tsx
import { Anspire } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Anspire.Combine size={64} />
    <Anspire.Combine type={'color'} size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Anspire } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Anspire.Avatar size={64} />
    <Anspire.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Anspire } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Anspire.colorPrimary} />
  </Flexbox>
);
```
