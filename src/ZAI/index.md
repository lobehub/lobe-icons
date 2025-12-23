---
nav: Components
group: Application
title: Z.ai
atomId: ZAI
description: https://z.ai
---

## Icons

```tsx
import { ZAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <ZAI size={64} />;
```

## Text

```tsx
import { ZAI } from '@lobehub/icons';

export default () => <ZAI.Text size={48} />;
```

## Combine

```tsx
import { ZAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <ZAI.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { ZAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <ZAI.Avatar size={64} />
    <ZAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { ZAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={ZAI.colorPrimary} />
  </Flexbox>
);
```
