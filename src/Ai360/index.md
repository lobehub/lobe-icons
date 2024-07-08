---
nav: Components
group: Provider
title: Ai360 (360智脑)
atomId: Ai360
description: https://ai.360.com/
---

## Icons

```tsx
import { Ai360 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Ai360 size={64} />
    <Ai360.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Ai360 } from '@lobehub/icons';

export default () => <Ai360.Text size={48} />;
```

## Combine

```tsx
import { Ai360 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Ai360.Combine size={64} />
    <Ai360.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Ai360 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Ai360.Avatar size={64} background={Ai360.colorPrimary} />
    <Ai360.Avatar size={64} />
    <Ai360.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Ai360 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Ai360.colorPrimary} />
  </Flexbox>
);
```
