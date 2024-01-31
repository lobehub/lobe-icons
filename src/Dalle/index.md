---
nav: Components
group: Icons
title: OpenAI (DALL·E)
atomId: Dalle
description: https://openai.com/dall-e-3
---

## Text

```tsx
import { Dalle } from '@lobehub/icons';

export default () => <Dalle.Text size={48} />;
```

## Combine

```tsx
import { Dalle } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Dalle.Combine size={64} />
    <Dalle.Combine size={64} extra={3} />
  </Flexbox>
);
```

## Colors

```tsx
import { Dalle } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Dalle.colorPrimary} />
  </Flexbox>
);
```
