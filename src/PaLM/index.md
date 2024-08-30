---
nav: Components
group: Model
title: PaLM (Google)
atomId: PaLM
description: https://ai.google/discover/palm2
---

## Icons

```tsx
import { PaLM } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <PaLM size={64} />
    <PaLM.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { PaLM } from '@lobehub/icons';

export default () => <PaLM.Text size={48} />;
```

## Combine

```tsx
import { PaLM } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <PaLM.Combine size={64} />
    <PaLM.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { PaLM } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <PaLM.Avatar size={64} />
    <PaLM.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { PaLM } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={PaLM.colorPrimary} />
  </Flexbox>
);
```
