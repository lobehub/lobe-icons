---
nav: Components
group: Icons
title: Mistral
atomId: Mistral
description: https://mistral.ai
---

## Icons

```tsx
import { Mistral } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Mistral size={64} />
    <Mistral.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Mistral } from '@lobehub/icons';

export default () => <Mistral.Text size={48} />;
```

## Combine

```tsx
import { Mistral } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Mistral.Combine size={64} />
    <Mistral.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Mistral } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Mistral.Avatar size={64} background={Mistral.colorPrimary} />
    <Mistral.Avatar size={64} />
    <Mistral.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Mistral } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Mistral.colorPrimary} />
    <ColorPreview color={Mistral.colorGradient} />
  </Flexbox>
);
```
