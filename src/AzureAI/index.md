---
nav: Components
group: Provider
title: AzureAI
atomId: AzureAI
description: https://ai.azure.com
---

## Icons

```tsx
import { AzureAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AzureAI size={64} />
    <AzureAI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { AzureAI } from '@lobehub/icons';

export default () => <AzureAI.Text size={48} />;
```

## Combine

```tsx
import { AzureAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <AzureAI.Combine size={64} />
    <AzureAI.Combine type={'color'} size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { AzureAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <AzureAI.Avatar size={64} />
    <AzureAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { AzureAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={AzureAI.colorPrimary} />
  </Flexbox>
);
```
