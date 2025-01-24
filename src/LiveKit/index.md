---
nav: Components
group:
  title: Application
  order: 10
title: LiveKit
atomId: LiveKit
description: https://livekit.io
---

## Icons

```tsx
import { LiveKit } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LiveKit size={64} />
    <LiveKit.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { LiveKit } from '@lobehub/icons';

export default () => <LiveKit.Text size={48} />;
```

## Combine

```tsx
import { LiveKit } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <LiveKit.Combine size={64} />
    <LiveKit.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { LiveKit } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LiveKit.Avatar size={64} />
    <LiveKit.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { LiveKit } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={LiveKit.colorPrimary} />
  </Flexbox>
);
```
