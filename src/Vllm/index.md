---
nav: Components
group: Provider
title: vLLM
atomId: Vllm
description: https://github.com/vllm-project
---

## Icons

```tsx
import { Vllm } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Vllm size={64} />
    <Vllm.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Vllm } from '@lobehub/icons';

export default () => <Vllm.Text size={48} />;
```

## Combine

```tsx
import { Vllm } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Vllm.Combine size={64} />
    <Vllm.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Vllm } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Vllm.Avatar size={64} />
    <Vllm.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Vllm } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Vllm.colorPrimary} />
  </Flexbox>
);
```
