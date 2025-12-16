---
nav: Components
group: Model
title: Essential AI
atomId: Essential AI
description: https://www.essential.ai
---

## Icons

```tsx
import { EssentialAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <EssentialAI size={64} />
    <EssentialAI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { EssentialAI } from '@lobehub/icons';

export default () => <EssentialAI.Text size={48} />;
```

## Combine

```tsx
import { EssentialAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <EssentialAI.Combine size={64} />
    <EssentialAI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { EssentialAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <EssentialAI.Avatar size={64} background={EssentialAI.colorPrimary} />
    <EssentialAI.Avatar size={64} />
    <EssentialAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { EssentialAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={EssentialAI.colorPrimary} />
    <ColorPreview color={EssentialAI.colorGradient} />
  </Flexbox>
);
```
