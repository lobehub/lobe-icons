---
nav: Components
group: Provider
title: 302.AI
atomId: Ai302
description: https://302.ai/
---

## Icons

```tsx
import { Ai302 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Ai302 size={64} />
    <Ai302.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Ai302 } from '@lobehub/icons';

export default () => <Ai302.Text size={64} />;
```

## Combine

```tsx
import { Ai302 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Ai302.Combine size={64} />
    <Ai302.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Ai302 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Ai302.Avatar size={64} />
    <Ai302.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Ai302 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Ai302.colorPrimary} />
  </Flexbox>
);
```
