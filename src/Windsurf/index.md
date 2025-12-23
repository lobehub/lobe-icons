---
nav: Components
group: Application
title: Windsurf
atomId: Windsurf
description: https://windsurf.com
---

## Icons

```tsx
import { Windsurf } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Windsurf size={64} />;
```

## Text

```tsx
import { Windsurf } from '@lobehub/icons';

export default () => <Windsurf.Text size={48} />;
```

## Combine

```tsx
import { Windsurf } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Windsurf.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Windsurf } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Windsurf.Avatar size={64} />
    <Windsurf.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Windsurf } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Windsurf.colorPrimary} />
  </Flexbox>
);
```
