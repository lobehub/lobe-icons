---
nav: Components
group: Application
title: LangSmith (LangChain)
atomId: LangSmith
description: https://langchain.com/langsmith
---

## Icons

```tsx
import { LangSmith } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LangSmith size={64} />
    <LangSmith.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { LangSmith } from '@lobehub/icons';

export default () => <LangSmith.Text size={48} />;
```

## Combine

```tsx
import { LangSmith } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <LangSmith.Combine size={64} />
    <LangSmith.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { LangSmith } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LangSmith.Avatar size={64} />
    <LangSmith.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { LangSmith } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={LangSmith.colorPrimary} />
  </Flexbox>
);
```
