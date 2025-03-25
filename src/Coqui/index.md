---
nav: Components
group: Application
title: Coqui
atomId: Coqui
description: https://github.com/coqui-ai/TTS
---

## Icons

```tsx
import { Coqui } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Coqui size={64} />
    <Coqui.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Coqui } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Coqui.Text size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Coqui } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Coqui.Combine size={64} />
    <Coqui.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Coqui } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Coqui.Avatar size={64} />
    <Coqui.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Coqui } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Coqui.colorPrimary} />
  </Flexbox>
);
```
