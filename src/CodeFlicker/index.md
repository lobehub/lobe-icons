---
nav: Components
group: Application
title: CodeFlicker
atomId: CodeFlicker
description: https://codeflicker.ai
---

## Icons

```tsx
import { CodeFlicker } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <CodeFlicker size={64} />
    <CodeFlicker.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { CodeFlicker } from '@lobehub/icons';

export default () => <CodeFlicker.Text size={48} />;
```

## Combine

```tsx
import { CodeFlicker } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CodeFlicker.Combine size={64} />
    <CodeFlicker.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { CodeFlicker } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <CodeFlicker.Avatar size={64} />
    <CodeFlicker.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { CodeFlicker } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={CodeFlicker.colorPrimary} />
  </Flexbox>
);
```
