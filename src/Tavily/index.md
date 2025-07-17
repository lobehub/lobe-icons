---
nav: Components
group: Application
title: Tavily
atomId: Tavily
description: https://tavily.com
---

## Icons

```tsx
import { Tavily } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Tavily size={64} />
    <Tavily.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Tavily } from '@lobehub/icons';

export default () => <Tavily.Text size={48} />;
```

## Combine

```tsx
import { Tavily } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Tavily.Combine size={64} />
    <Tavily.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Tavily } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Tavily.Avatar size={64} />
    <Tavily.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Tavily } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Tavily.colorPrimary} />
  </Flexbox>
);
```
