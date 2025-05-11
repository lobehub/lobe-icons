---
nav: Components
group:
  title: Application
  order: 10
title: PydanticAI
atomId: PydanticAI
description: https://ai.pydantic.dev
---

## Icons

```tsx
import { PydanticAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <PydanticAI size={64} />
    <PydanticAI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { PydanticAI } from '@lobehub/icons';

export default () => <PydanticAI.Text size={48} />;
```

## Combine

```tsx
import { PydanticAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <PydanticAI.Combine size={64} />
    <PydanticAI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { PydanticAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <PydanticAI.Avatar size={64} />
    <PydanticAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { PydanticAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={PydanticAI.colorPrimary} />
  </Flexbox>
);
```
