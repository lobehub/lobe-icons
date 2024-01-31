---
nav: Components
group: Icons
title: Baichuan (百川)
atomId: Baichuan
description: https://www.baichuan-ai.com
---

## Icons

```tsx
import { Baichuan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Baichuan size={64} />
    <Baichuan.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Baichuan } from '@lobehub/icons';

export default () => <Baichuan.Text size={48} />;
```

## Combine

```tsx
import { Baichuan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Baichuan.Combine size={64} />
    <Baichuan.Combine size={64} type={'color'} />
    <Baichuan.Combine size={64} type={'color'} color={Baichuan.colorPrimary} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Baichuan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Baichuan.Avatar size={64} background={Baichuan.colorPrimary} />
    <Baichuan.Avatar size={64} />
    <Baichuan.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Baichuan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Baichuan.colorPrimary} />
  </Flexbox>
);
```
