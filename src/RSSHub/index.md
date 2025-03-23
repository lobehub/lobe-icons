---
nav: Components
group: Application
title: RSSHub
atomId: RSSHub
description: https://rsshub.app
---

## Icons

```tsx
import { RSSHub } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <RSSHub size={64} />
    <RSSHub.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { RSSHub } from '@lobehub/icons';

export default () => <RSSHub.Text size={48} />;
```

## Combine

```tsx
import { RSSHub } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <RSSHub.Combine size={64} />
    <RSSHub.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { RSSHub } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <RSSHub.Avatar size={64} />
    <RSSHub.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { RSSHub } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={RSSHub.colorPrimary} />
  </Flexbox>
);
```
