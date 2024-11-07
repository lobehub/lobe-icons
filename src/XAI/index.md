---
nav: Components
group: Provider
title: xAI
atomId: XAI
description: https://x.ai
---

## Icons

```tsx
import { XAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <XAI size={64} />;
```

## Text

```tsx
import { XAI } from '@lobehub/icons';

export default () => <XAI.Text size={48} />;
```

## Combine

```tsx
import { XAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <XAI.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { XAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <XAI.Avatar size={64} />
    <XAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { XAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={XAI.colorPrimary} />
  </Flexbox>
);
```
