---
nav: Components
group: Provider
title: LG AI (KMMLU/EXAONE)
atomId: LG
description: https://lgresearch.ai
---

## Icons

```tsx
import { LG } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LG size={64} />
    <LG.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { LG } from '@lobehub/icons';

export default () => <LG.Text size={64} />;
```

## Combine

```tsx
import { LG } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <LG.Combine size={64} />
    <LG.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { LG } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LG.Avatar size={64} />
    <LG.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { LG } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={LG.colorPrimary} />
  </Flexbox>
);
```
