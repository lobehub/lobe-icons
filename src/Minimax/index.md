---
nav: Components
group: Model
title: Minimax
atomId: Minimax
description: https://api.minimax.chat
---

## Icons

```tsx
import { Minimax } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Minimax size={64} />
    <Minimax.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Minimax } from '@lobehub/icons';

export default () => <Minimax.Text size={48} />;
```

## Combine

```tsx
import { Minimax } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Minimax.Combine size={64} />
    <Minimax.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Minimax } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Minimax.Avatar size={64} background={Minimax.colorPrimary} />
    <Minimax.Avatar size={64} />
    <Minimax.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Minimax } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Minimax.colorPrimary} />
    <ColorPreview color={Minimax.colorGradient} />
  </Flexbox>
);
```
