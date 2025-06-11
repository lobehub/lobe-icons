---
nav: Components
group: Application
title: NovelAI
atomId: NovelAI
description: https://novelai.net
---

## Icons

```tsx
import { NovelAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <NovelAI size={64} />;
```

## Text

```tsx
import { NovelAI } from '@lobehub/icons';

export default () => <NovelAI.Text size={48} />;
```

## Combine

```tsx
import { NovelAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <NovelAI.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { NovelAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <NovelAI.Avatar size={64} />
    <NovelAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { NovelAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={NovelAI.colorPrimary} />
  </Flexbox>
);
```
