---
nav: Components
group: Application
title: n8n
atomId: N8n
description: https://n8n.io
---

## Icons

```tsx
import { N8n } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <N8n size={64} />
    <N8n.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { N8n } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <N8n.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { N8n } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <N8n.Combine size={64} />
    <N8n.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { N8n } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <N8n.Avatar size={64} />
    <N8n.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { N8n } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={N8n.colorPrimary} />
  </Flexbox>
);
```
