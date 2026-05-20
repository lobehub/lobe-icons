---
nav: Components
group: Application
title: EvoLinkAI
atomId: EvoLinkAI
description: https://evolink.ai
---

## Icons

```tsx
import { EvoLinkAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <EvoLinkAI size={64} />
    <EvoLinkAI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { EvoLinkAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <EvoLinkAI.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { EvoLinkAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <EvoLinkAI.Combine size={64} />
    <EvoLinkAI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { EvoLinkAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <EvoLinkAI.Avatar size={64} />
    <EvoLinkAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { EvoLinkAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={EvoLinkAI.colorPrimary} />
  </Flexbox>
);
```
