---
nav: Components
group: Provider
title: 01.AI (零一万物)
atomId: Lingyi
description: https://www.lingyiwanwu.com/
---

## Icons

```tsx
import { ZeroOne } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <ZeroOne size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { ZeroOne } from '@lobehub/icons';

export default () => <ZeroOne.Text size={48} />;
```

## Combine

```tsx
import { ZeroOne } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <ZeroOne.Combine size={64} />
    <ZeroOne.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { ZeroOne } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <ZeroOne.Avatar size={64} />
    <ZeroOne.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { ZeroOne } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={ZeroOne.colorPrimary} />
  </Flexbox>
);
```
