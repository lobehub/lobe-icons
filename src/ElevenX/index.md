---
nav: Components
group: Application
title: 11x
atomId: ElevenX
description: https://11x.ai
---

## Icons

```tsx
import { ElevenX } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <ElevenX size={64} />;
```

## Text

```tsx
import { ElevenX } from '@lobehub/icons';

export default () => <ElevenX.Text size={48} />;
```

## Combine

```tsx
import { ElevenX } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <ElevenX.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { ElevenX } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <ElevenX.Avatar size={64} />
    <ElevenX.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { ElevenX } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={ElevenX.colorPrimary} />
  </Flexbox>
);
```
