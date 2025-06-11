---
nav: Components
group: Application
title: Player2
atomId: Player2
description: https://player2.game
---

## Icons

```tsx
import { Player2 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Player2 size={64} />
    <Player2.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Player2 } from '@lobehub/icons';

export default () => <Player2.Text size={48} />;
```

## Combine

```tsx
import { Player2 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Player2.Combine size={64} />
    <Player2.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Player2 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Player2.Avatar size={64} />
    <Player2.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Player2 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Player2.colorPrimary} />
  </Flexbox>
);
```
