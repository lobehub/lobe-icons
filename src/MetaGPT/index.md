---
nav: Components
group: Application
title: MetaGPT
atomId: MetaGPT
description: https://github.com/FoundationAgents/MetaGPT
---

## Icons

```tsx
import { MetaGPT } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <MetaGPT size={64} />;
```

## Text

```tsx
import { MetaGPT } from '@lobehub/icons';

export default () => <MetaGPT.Text size={48} />;
```

## Combine

```tsx
import { MetaGPT } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <MetaGPT.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { MetaGPT } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <MetaGPT.Avatar size={64} />
    <MetaGPT.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { MetaGPT } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={MetaGPT.colorPrimary} />
  </Flexbox>
);
```
