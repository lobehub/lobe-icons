---
nav: Components
group: Application
title: AG-UI
atomId: Agui
description: https://ag-ui.com
---

## Icons

```tsx
import { Agui } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <Agui size={64} />;
```

## Text

```tsx
import { Agui } from '@lobehub/icons';

export default () => <Agui.Text size={48} />;
```

## Combine

```tsx
import { Agui } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Agui.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Agui } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Agui.Avatar size={64} />
    <Agui.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Agui } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Agui.colorPrimary} />
  </Flexbox>
);
```
