---
nav: Components
group: Application
title: LangChain
atomId: LangChain
description: https://langchain.com
---

## Icons

```tsx
import { LangChain } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LangChain size={64} />
    <LangChain.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { LangChain } from '@lobehub/icons';

export default () => <LangChain.Text size={48} />;
```

## Combine

```tsx
import { LangChain } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <LangChain.Combine size={64} />
    <LangChain.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { LangChain } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LangChain.Avatar size={64} />
    <LangChain.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { LangChain } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={LangChain.colorPrimary} />
  </Flexbox>
);
```
