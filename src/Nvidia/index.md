---
nav: Components
group: Application
title: Nvidia (ChatWithRTX)
atomId: Nvidia
description: https://www.nvidia.com/en-us/ai-on-rtx/chat-with-rtx-generative-ai/
---

## Icons

```tsx
import { Nvidia } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Nvidia size={64} />
    <Nvidia.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Nvidia } from '@lobehub/icons';

export default () => <Nvidia.Text size={48} />;
```

## Combine

```tsx
import { Nvidia } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Nvidia.Combine size={64} />
    <Nvidia.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Nvidia } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Nvidia.Avatar size={64} />
    <Nvidia.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Nvidia } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Nvidia.colorPrimary} />
  </Flexbox>
);
```
