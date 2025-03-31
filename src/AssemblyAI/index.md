---
nav: Components
group: Model
title: AssemblyAI
atomId: AssemblyAI
description: https://assemblyai.com
---

## Icons

```tsx
import { AssemblyAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AssemblyAI size={64} />
    <AssemblyAI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AssemblyAI } from '@lobehub/icons';

export default () => <AssemblyAI.Text size={48} />;
```

## Combine

```tsx
import { AssemblyAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AssemblyAI.Combine size={64} />
    <AssemblyAI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AssemblyAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AssemblyAI.Avatar size={64} />
    <AssemblyAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AssemblyAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AssemblyAI.colorPrimary} />
  </Flexbox>
);
```
