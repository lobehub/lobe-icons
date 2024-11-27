---
nav: Components
group: Provider
title: Upstage
atomId: Upstage
description: https://upstage.ai
---

## Icons

```tsx
import { Upstage } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Upstage size={64} />
    <Upstage.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Upstage } from '@lobehub/icons';

export default () => <Upstage.Text size={48} />;
```

## Combine

```tsx
import { Upstage } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Upstage.Combine size={64} />
    <Upstage.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Upstage } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Upstage.Avatar size={64} background={Upstage.colorPrimary} />
    <Upstage.Avatar size={64} />
    <Upstage.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Upstage } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Upstage.colorPrimary} />
  </Flexbox>
);
```
