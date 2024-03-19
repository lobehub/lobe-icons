---
nav: Components
group: Provider
title: Moonshot (月之暗面)
atomId: Moonshot
description: https://moonshot.cn
---

## Icons

```tsx
import { Moonshot } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Moonshot size={64} />;
```

## Text

```tsx
import { Moonshot } from '@lobehub/icons';

export default () => <Moonshot.Text size={48} />;
```

## Combine

```tsx
import { Moonshot } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Moonshot.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Moonshot } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Moonshot.Avatar size={64} />
    <Moonshot.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Moonshot } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Moonshot.colorPrimary} />
  </Flexbox>
);
```
