---
nav: Components
group: Application
title: Coze
atomId: Coze
description: https://coze.com
---

## Icons

```tsx
import { Coze } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Coze size={64} />;
```

## Text

```tsx
import { Coze } from '@lobehub/icons';

export default () => <Coze.Text size={48} />;
```

## Combine

```tsx
import { Coze } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Coze.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Coze } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Coze.Avatar size={64} />
    <Coze.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Coze } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Coze.colorPrimary} />
  </Flexbox>
);
```
