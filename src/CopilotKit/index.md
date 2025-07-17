---
nav: Components
group: Application
title: CopilotKit
atomId: CopilotKit
description: https://copilotkit.ai
---

## Icons

```tsx
import { CopilotKit } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <CopilotKit size={64} />
    <CopilotKit.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { CopilotKit } from '@lobehub/icons';

export default () => <CopilotKit.Text size={48} />;
```

## Combine

```tsx
import { CopilotKit } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CopilotKit.Combine size={64} />
    <CopilotKit.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { CopilotKit } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <CopilotKit.Avatar size={64} />
    <CopilotKit.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { CopilotKit } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={CopilotKit.colorPrimary} />
  </Flexbox>
);
```
