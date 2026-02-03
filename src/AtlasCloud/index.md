---
nav: Components
group: Provider
title: AtlasCloud
atomId: AtlasCloud
description: https://atlascloud.ai
---

## Icons

```tsx
import { AtlasCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <AtlasCloud size={64} />;
```

## Text

```tsx
import { AtlasCloud } from '@lobehub/icons';

export default () => <AtlasCloud.Text size={48} />;
```

## Combine

```tsx
import { AtlasCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AtlasCloud.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AtlasCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <AtlasCloud.Avatar size={64} />
    <AtlasCloud.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AtlasCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AtlasCloud.colorPrimary} />
  </Flexbox>
);
```
