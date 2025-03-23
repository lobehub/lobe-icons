---
nav: Components
group: Application
title: DreamMachine (Luma)
atomId: DreamMachine
description: https://lumalabs.ai/dream-machine
---

## Icons

```tsx
import { DreamMachine } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <DreamMachine size={64} />;
```

## Text

```tsx
import { DreamMachine } from '@lobehub/icons';

export default () => <DreamMachine.Text size={48} />;
```

## Combine

```tsx
import { DreamMachine } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <DreamMachine.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { DreamMachine } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <DreamMachine.Avatar size={64} />
    <DreamMachine.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { DreamMachine } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={DreamMachine.colorPrimary} />
  </Flexbox>
);
```
