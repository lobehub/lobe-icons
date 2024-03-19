---
nav: Components
group: Application
title: Google (Colab)
atomId: Colab
description: https://colab.research.google.com/
---

## Icons

```tsx
import { Colab } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Colab size={64} />
    <Colab.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Colab } from '@lobehub/icons';

export default () => <Colab.Text size={48} />;
```

## Combine

```tsx
import { Colab } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Colab.Combine size={64} />
    <Colab.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Colab } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Colab.Avatar size={64} background={Colab.colorPrimary} />
    <Colab.Avatar size={64} />
    <Colab.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Colab } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Colab.colorPrimary} />
    <ColorPreview color={Colab.colorGradient} />
  </Flexbox>
);
```
