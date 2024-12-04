---
nav: Components
group: Model
title: Nova (AWS)
atomId: Nova
description: https://aws.amazon.com/cn/ai/generative-ai/nova
---

## Icons

```tsx
import { Nova } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Nova size={64} />
    <Nova.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Nova } from '@lobehub/icons';

export default () => <Nova.Text size={48} />;
```

## Combine

```tsx
import { Nova } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Nova.Combine size={64} />
    <Nova.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Nova } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Nova.Avatar size={64} background={Nova.colorPrimary} />
    <Nova.Avatar size={64} />
    <Nova.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Nova } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Nova.colorPrimary} />
    <ColorPreview color={Nova.colorGradient} />
  </Flexbox>
);
```
