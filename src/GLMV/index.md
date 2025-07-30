---
nav: Components
group: Model
atomId: GLMV
title: GLM-V
description: https://huggingface.co/zai-org/GLM-4.1V-9B-Thinking
---

## Icons

```tsx
import { GLMV } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <GLMV size={64} />
    <GLMV.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { GLMV } from '@lobehub/icons';

export default () => <GLMV.Text size={48} />;
```

## Combine

```tsx
import { GLMV } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <GLMV.Combine size={64} />
    <GLMV.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { GLMV } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <GLMV.Avatar size={64} />
    <GLMV.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { GLMV } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={GLMV.colorPrimary} />
  </Flexbox>
);
```
