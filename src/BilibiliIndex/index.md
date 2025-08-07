---
nav: Components
group: Model
title: Bilibili Index (Index Team)
atomId: BilibiliIndex
description: https://huggingface.co/IndexTeam
---

## Icons

```tsx
import { BilibiliIndex } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <BilibiliIndex size={64} />;
```

## Text

```tsx
import { BilibiliIndex } from '@lobehub/icons';

export default () => <BilibiliIndex.Text size={48} />;
```

## Combine

```tsx
import { BilibiliIndex } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <BilibiliIndex.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { BilibiliIndex } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <BilibiliIndex.Avatar size={64} />
    <BilibiliIndex.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { BilibiliIndex } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={BilibiliIndex.colorPrimary} />
  </Flexbox>
);
```
