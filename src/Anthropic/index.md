---
nav: Components
group: Provider
title: Anthropic
atomId: Anthropic
description: https://anthropic.com
---

## Icons

```tsx
import { Anthropic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Anthropic size={64} />;
```

## Text

```tsx
import { Anthropic } from '@lobehub/icons';

export default () => <Anthropic.Text size={48} />;
```

## Avatars

```tsx
import { Anthropic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Anthropic.Avatar size={64} />
    <Anthropic.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Anthropic } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Anthropic.colorPrimary} />
  </Flexbox>
);
```
