---
nav: Components
group: Provider
title: HuggingFace
atomId: HuggingFace
description: https://huggingface.co
---

## Icons

```tsx
import { HuggingFace } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <HuggingFace size={64} />
    <HuggingFace.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { HuggingFace } from '@lobehub/icons';

export default () => <HuggingFace.Text size={48} />;
```

## Combine

```tsx
import { HuggingFace } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <HuggingFace.Combine size={64} />
    <HuggingFace.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { HuggingFace } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <HuggingFace.Avatar size={64} />
    <HuggingFace.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { HuggingFace } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={HuggingFace.colorPrimary} />
  </Flexbox>
);
```
