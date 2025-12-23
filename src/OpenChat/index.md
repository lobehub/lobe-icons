---
nav: Components
group: Model
title: OpenChat
atomId: OpenChat
description: https://huggingface.co/openchat
---

## Icons

```tsx
import { OpenChat } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <OpenChat size={64} />
    <OpenChat.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { OpenChat } from '@lobehub/icons';

export default () => <OpenChat.Text size={48} />;
```

## Combine

```tsx
import { OpenChat } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <OpenChat.Combine size={64} />
    <OpenChat.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { OpenChat } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <OpenChat.Avatar size={64} />
    <OpenChat.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { OpenChat } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={OpenChat.colorPrimary} />
  </Flexbox>
);
```
