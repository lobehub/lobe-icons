---
nav: Components
group:
  title: Application
  order: 10
title: ComfyUI
atomId: ComfyUI
description: https://www.comfy.org
---

## Icons

```tsx
import { ComfyUI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <ComfyUI size={64} />
    <ComfyUI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { ComfyUI } from '@lobehub/icons';

export default () => <ComfyUI.Text size={48} />;
```

## Combine

```tsx
import { ComfyUI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <ComfyUI.Combine size={64} />
    <ComfyUI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { ComfyUI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <ComfyUI.Avatar size={64} />
    <ComfyUI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { ComfyUI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={ComfyUI.colorPrimary} />
    <ColorPreview color={ComfyUI.colorGradient} />
  </Flexbox>
);
```
