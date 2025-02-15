---
nav: Components
group: Provider
title: Jina AI
atomId: Jina
description: https://jina.ai
---

## Icons

```tsx
import { Jina } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Jina size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Jina } from '@lobehub/icons';

export default () => <Jina.Text size={48} />;
```

## Avatars

```tsx
import { Jina } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Jina.Avatar size={64} />
    <Jina.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Jina } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Jina.colorPrimary} />
  </Flexbox>
);
```
