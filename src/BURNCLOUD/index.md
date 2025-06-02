---
nav: Components
group: Provider
title: BURNCLOUD
atomId: BURNCLOUD
description: https://burncloud.ai/
---

## Icons

```tsx
import { BURNCLOUD } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <BURNCLOUD size={64} />
    <BURNCLOUD.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { BURNCLOUD } from '@lobehub/icons';

export default () => <BURNCLOUD.Text size={48} />;
```

## Full Logo with Text

```tsx
import { BURNCLOUD } from '@lobehub/icons';

export default () => <BURNCLOUD.Full size={120} />;
```

## Combine

```tsx
import { BURNCLOUD } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <BURNCLOUD.Combine size={64} />
    <BURNCLOUD.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { BURNCLOUD } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <BURNCLOUD.Avatar size={64} background={BURNCLOUD.colorPrimary} />
    <BURNCLOUD.Avatar size={64} />
    <BURNCLOUD.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { BURNCLOUD } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={BURNCLOUD.colorPrimary} />
  </Flexbox>
);
```
