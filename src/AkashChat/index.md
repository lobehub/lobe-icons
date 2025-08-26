---
nav: Components
group: Provider
title: AkashChat
atomId: AkashChat
description: https://chatapi.akash.network
---

## Icons

```tsx
import { AkashChat } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AkashChat size={64} />
    <AkashChat.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AkashChat } from '@lobehub/icons';

export default () => <AkashChat.Text size={48} />;
```

## Combine

```tsx
import { AkashChat } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AkashChat.Combine size={64} />
    <AkashChat.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AkashChat } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AkashChat.Avatar size={64} />
    <AkashChat.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AkashChat } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AkashChat.colorPrimary} />
  </Flexbox>
);
```
