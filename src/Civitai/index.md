---
nav: Components
group: Provider
title: Civitai
atomId: Civitai
description: https://civitai.com
---

## Icons

```tsx
import { Civitai } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Civitai size={64} />
    <Civitai.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Civitai } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Civitai.Text size={48} />
    <Civitai.TextColor size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { Civitai } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Civitai.Combine size={64} />
    <Civitai.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Civitai } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <Civitai.Avatar size={64} />
    <Civitai.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Civitai } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Civitai.colorPrimary} />
  </Flexbox>
);
```
