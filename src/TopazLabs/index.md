---
nav: Components
group: Application
title: TopazLabs
atomId: TopazLabs
description: https://topazlabs.com
---

## Icons

```tsx
import { TopazLabs } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <TopazLabs size={64} />;
```

## Text

```tsx
import { TopazLabs } from '@lobehub/icons';

export default () => <TopazLabs.Text size={48} />;
```

## Combine

```tsx
import { TopazLabs } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <TopazLabs.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { TopazLabs } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <TopazLabs.Avatar size={64} />
    <TopazLabs.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { TopazLabs } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={TopazLabs.colorPrimary} />
  </Flexbox>
);
```
