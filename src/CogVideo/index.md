---
nav: Components
group: Model
title: CogVideo
atomId: CogVideo
description: https://github.com/THUDM/CogVideo
---

## Icons

```tsx
import { CogVideo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <CogVideo size={64} />
    <CogVideo.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { CogVideo } from '@lobehub/icons';

export default () => <CogVideo.Text size={48} />;
```

## Combine

```tsx
import { CogVideo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <CogVideo.Combine size={64} />
    <CogVideo.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { CogVideo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <CogVideo.Avatar size={64} />
    <CogVideo.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { CogVideo } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={CogVideo.colorPrimary} />
  </Flexbox>
);
```
