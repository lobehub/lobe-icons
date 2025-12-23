---
nav: Components
group: Provider
title: IBM (Granite)
atomId: IBM
description: https://huggingface.co/ibm-granite
---

## Icons

```tsx
import { IBM } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => <IBM size={64} />;
```

## Text

```tsx
import { IBM } from '@lobehub/icons';

export default () => <IBM.Text size={48} />;
```

## Combine

```tsx
import { IBM } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <IBM.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { IBM } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <IBM.Avatar size={64} />
    <IBM.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { IBM } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={IBM.colorPrimary} />
  </Flexbox>
);
```
