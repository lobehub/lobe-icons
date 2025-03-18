---
nav: Components
group: Provider
title: AI Studio (Google)
atomId: AiStudio
description: https://aistudio.google.com
---

## Icons

```tsx
import { AiStudio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AiStudio size={64} />
    <AiStudio.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AiStudio } from '@lobehub/icons';

export default () => <AiStudio.Text size={48} />;
```

## Combine

```tsx
import { AiStudio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AiStudio.Combine size={64} />
    <AiStudio.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AiStudio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AiStudio.Avatar size={64} />
    <AiStudio.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AiStudio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AiStudio.colorPrimary} />
  </Flexbox>
);
```
