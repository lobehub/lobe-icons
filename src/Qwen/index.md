---
nav: Components
group: Model
title: Qwen (千问)
atomId: Qwen
description: https://huggingface.co/Qwen
---

## Icons

```tsx
import { Qwen } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Qwen size={64} />
    <Qwen.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Qwen } from '@lobehub/icons';

export default () => <Qwen.Text size={48} />;
```

## Combine

```tsx
import { Qwen } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Qwen.Combine size={64} />
    <Qwen.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Qwen } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Qwen.Avatar size={64} background={Qwen.colorGradient} />
    <Qwen.Avatar size={64} />
    <Qwen.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Qwen } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Qwen.colorPrimary} />
    <ColorPreview color={Qwen.colorGradient} />
  </Flexbox>
);
```
