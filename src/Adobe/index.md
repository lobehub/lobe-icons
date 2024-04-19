---
nav: Components
group: Application
title: Adobe
atomId: Adobe
description: https://adobe.com
---

## Icons

```tsx
import { Adobe } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Adobe size={64} />
    <Adobe.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Adobe } from '@lobehub/icons';

export default () => <Adobe.Text size={48} />;
```

## Combine

```tsx
import { Adobe } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Adobe.Combine size={64} />
    <Adobe.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Adobe } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Adobe.Avatar size={64} />
    <Adobe.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Adobe } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Adobe.colorPrimary} />
  </Flexbox>
);
```
