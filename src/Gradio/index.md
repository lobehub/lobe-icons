---
nav: Components
group: Application
title: Gradio
atomId: Gradio
description: https://gradio.app
---

## Icons

```tsx
import { Gradio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Gradio size={64} />
    <Gradio.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Gradio } from '@lobehub/icons';

export default () => <Gradio.Text size={48} />;
```

## Combine

```tsx
import { Gradio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Gradio.Combine size={64} />
    <Gradio.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Gradio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Gradio.Avatar size={64} />
    <Gradio.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Gradio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Gradio.colorPrimary} />
  </Flexbox>
);
```
