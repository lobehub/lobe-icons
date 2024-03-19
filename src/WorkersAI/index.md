---
nav: Components
group: Provider
title: Cloudflare (WorkersAI)
atomId: WorkersAI
description: https://developers.cloudflare.com/workers-ai
---

## Icons

```tsx
import { WorkersAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <WorkersAI size={64} />
    <WorkersAI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { WorkersAI } from '@lobehub/icons';

export default () => <WorkersAI.Text size={48} />;
```

## Combine

```tsx
import { WorkersAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <WorkersAI.Combine size={64} />
    <WorkersAI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { WorkersAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <WorkersAI.Avatar size={64} />
    <WorkersAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { WorkersAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={WorkersAI.colorPrimary} />
  </Flexbox>
);
```
