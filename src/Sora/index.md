---
nav: Components
group: Model
title: Sora (OpenAI)
atomId: Sora
description: https://platform.openai.com/docs/models/sora-2
---

## Icons

```tsx
import { Sora } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Sora size={64} />
    <Sora.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Sora } from '@lobehub/icons';

export default () => <Sora.Text size={48} />;
```

## Combine

```tsx
import { Sora } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Sora.Combine size={64} />
    <Sora.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Sora } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Sora.Avatar size={64} />
    <Sora.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Sora } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Sora.colorPrimary} />
    <ColorPreview color={Sora.colorGradient} />
  </Flexbox>
);
```
