---
nav: Components
group:
  title: Application
  order: 10
title: Kling (可灵)
atomId: Kling
description: https://klingai.com
---

## Icons

```tsx
import { Kling } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kling size={64} />
    <Kling.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Kling } from '@lobehub/icons';

export default () => <Kling.Text size={48} />;
```

## Combine

```tsx
import { Kling } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Kling.Combine size={64} />
    <Kling.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Kling } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Kling.Avatar size={64} />
    <Kling.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Kling } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Kling.colorPrimary} />
    <ColorPreview color={Kling.colorGradient} />
  </Flexbox>
);
```
