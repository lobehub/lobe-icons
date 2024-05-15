---
nav: Components
group: Provider
title: LM Studio
atomId: LmStudio
description: https://lmstudio.ai
---

## Icons

```tsx
import { LmStudio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LmStudio size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { LmStudio } from '@lobehub/icons';

export default () => <LmStudio.Text size={48} />;
```

## Combine

```tsx
import { LmStudio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <LmStudio.Combine size={64} />
    <LmStudio.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { LmStudio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LmStudio.Avatar size={64} background={LmStudio.colorPrimary} />
    <LmStudio.Avatar size={64} />
    <LmStudio.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { LmStudio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={LmStudio.colorPrimary} />
    <ColorPreview color={LmStudio.colorGradient} />
  </Flexbox>
);
```
