---
nav: Components
group: Application
title: DeepAI
atomId: DeepAI
description: hhttps://deepai.org
---

## Icons

```tsx
import { DeepAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <DeepAI size={64} />;
```

## Text

```tsx
import { DeepAI } from '@lobehub/icons';

export default () => <DeepAI.Text size={48} />;
```

## Combine

```tsx
import { DeepAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <DeepAI.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { DeepAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <DeepAI.Avatar size={64} />
    <DeepAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { DeepAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={DeepAI.colorPrimary} />
  </Flexbox>
);
```
