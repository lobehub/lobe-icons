---
nav: Components
group: Model
title: LLaVA
atomId: LLaVA
description: https://github.com/haotian-liu/LLaVA
---

## Icons

```tsx
import { LLaVA } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LLaVA size={64} />
    <LLaVA.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { LLaVA } from '@lobehub/icons';

export default () => <LLaVA.Text size={48} />;
```

## Combine

```tsx
import { LLaVA } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <LLaVA.Combine size={64} />
    <LLaVA.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { LLaVA } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LLaVA.Avatar size={64} background={LLaVA.colorPrimary} />
    <LLaVA.Avatar size={64} />
    <LLaVA.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { LLaVA } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={LLaVA.colorPrimary} />
    <ColorPreview color={LLaVA.colorGradient} />
  </Flexbox>
);
```
