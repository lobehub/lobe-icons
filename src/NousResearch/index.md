---
nav: Components
group: Provider
title: NousResearch
atomId: NousResearch
description: https://nousresearch.com
---

## Icons

```tsx
import { NousResearch } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <NousResearch size={64} />;
```

## Text

```tsx
import { NousResearch } from '@lobehub/icons';

export default () => <NousResearch.Text size={48} />;
```

## Combine

```tsx
import { NousResearch } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <NousResearch.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { NousResearch } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <NousResearch.Avatar size={64} />
    <NousResearch.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { NousResearch } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={NousResearch.colorPrimary} />
  </Flexbox>
);
```
