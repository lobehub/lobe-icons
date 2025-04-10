---
nav: Components
group: Provider
title: AiHubMix (推理时代)
atomId: AiHubMix
description: https://aihubmix.com
---

## Icons

```tsx
import { AiHubMix } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AiHubMix size={64} />
    <AiHubMix.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AiHubMix } from '@lobehub/icons';

export default () => <AiHubMix.Text size={48} />;
```

## Combine

```tsx
import { AiHubMix } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AiHubMix.Combine size={64} />
    <AiHubMix.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AiHubMix } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AiHubMix.Avatar size={64} />
    <AiHubMix.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AiHubMix } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AiHubMix.colorPrimary} />
  </Flexbox>
);
```
