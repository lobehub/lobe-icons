---
nav: Components
group: Icons
title: Google (Gemini)
atomId: Gemini
description: https://deepmind.google/technologies/gemini
---

## Icons

```tsx
import { Gemini } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Gemini size={64} />
    <Gemini.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Gemini } from '@lobehub/icons';

export default () => <Gemini.Text size={48} />;
```

## Combine

```tsx
import { Gemini } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Gemini.Combine size={64} />
    <Gemini.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Brands

```tsx
import { Gemini } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Gemini.Brand size={64} />
    <Gemini.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Gemini } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Gemini.Avatar size={64} background={Gemini.colorPrimary} />
    <Gemini.Avatar size={64} />
    <Gemini.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Gemini } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Gemini.colorPrimary} />
    <ColorPreview color={Gemini.colorGradient} />
  </Flexbox>
);
```
