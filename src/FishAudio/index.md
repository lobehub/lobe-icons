---
nav: Components
group: Model
title: FishAudio (Bert)
atomId: FishAudio
description: https://github.com/fishaudio
---

## Icons

```tsx
import { FishAudio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <FishAudio size={64} />;
```

## Text

```tsx
import { FishAudio } from '@lobehub/icons';

export default () => <FishAudio.Text size={48} />;
```

## Combine

```tsx
import { FishAudio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <FishAudio.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { FishAudio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <FishAudio.Avatar size={64} />
    <FishAudio.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { FishAudio } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={FishAudio.colorPrimary} />
  </Flexbox>
);
```
