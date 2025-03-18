---
nav: Components
group: Application
title: LangGraph (LangChain)
atomId: LangGraph
description: https://langchain.com/LangGraph
---

## Icons

```tsx
import { LangGraph } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LangGraph size={64} />
    <LangGraph.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { LangGraph } from '@lobehub/icons';

export default () => <LangGraph.Text size={48} />;
```

## Combine

```tsx
import { LangGraph } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <LangGraph.Combine size={64} />
    <LangGraph.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { LangGraph } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LangGraph.Avatar size={64} />
    <LangGraph.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { LangGraph } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={LangGraph.colorPrimary} />
  </Flexbox>
);
```
