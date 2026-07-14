---
nav: Components
group: Application
title: CelestoAI
atomId: CelestoAI
description: https://celesto.ai
---

## Icons

```tsx
import { CelestoAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <CelestoAI size={64} />
    <CelestoAI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { CelestoAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CelestoAI.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { CelestoAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CelestoAI.Combine size={64} />
    <CelestoAI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { CelestoAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <CelestoAI.Avatar size={64} />
    <CelestoAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { CelestoAI } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={CelestoAI.colorPrimary} />
  </Flexbox>
);
```
