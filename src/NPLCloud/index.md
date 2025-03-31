---
nav: Components
group: Provider
title: NPLCloud
atomId: NPLCloud
description: https://nlpcloud.com
---

## Icons

```tsx
import { NPLCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <NPLCloud size={64} />
    <NPLCloud.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { NPLCloud } from '@lobehub/icons';

export default () => <NPLCloud.Text size={48} />;
```

## Combine

```tsx
import { NPLCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <NPLCloud.Combine size={64} />
    <NPLCloud.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { NPLCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <NPLCloud.Avatar size={64} />
    <NPLCloud.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { NPLCloud } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={NPLCloud.colorPrimary} />
  </Flexbox>
);
```
