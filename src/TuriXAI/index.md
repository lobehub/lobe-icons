---
nav: Components
group: Model
title: TuriXAI
atomId: TuriXAI
description: https://turix.ai/
---

## Icons

```tsx
import { TuriXAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <TuriXAI size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { TuriXAI } from '@lobehub/icons';

export default () => <TuriXAI.Text size={118} />;
```

## Combine

```tsx
import { TuriXAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <TuriXAI.CombineA size={192} />
    <TuriXAI.CombineB size={192} />
  </Flexbox>
);
```

## Avatars

```tsx
import { TuriXAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <TuriXAI.AvatarA size={64} />
    <TuriXAI.AvatarB size={64} />
  </Flexbox>
);
```

## Colors

```tsx
import { TuriXAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={TuriXAI.colorGradient} />
  </Flexbox>
);
```
