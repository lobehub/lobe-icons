---
nav: Components
group: Model
title: Ai21Labs (Jamba)
atomId: Ai21
description: https://huggingface.co/ai21labs
---

## Icons

```tsx
import { Ai21 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Ai21 size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Ai21 } from '@lobehub/icons';

export default () => <Ai21.Text size={48} />;
```

## Combine

```tsx
import { Ai21 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Ai21.Combine size={64} />;
```

## Brands

```tsx
import { Ai21 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Ai21.Brand size={48} />
    <Ai21.BrandColor size={48} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Ai21 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Ai21.Avatar size={64} background={Ai21.colorPrimary} />
    <Ai21.Avatar size={64} />
    <Ai21.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Ai21 } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Ai21.colorPrimary} />
    <ColorPreview color={Ai21.colorGradient} />
  </Flexbox>
);
```
