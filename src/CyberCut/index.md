---
nav: Components
group: Application
title: CyberCut
atomId: CyberCut
description: https://cybercut.ai
---

## Icons

```tsx
import { CyberCut } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <CyberCut size={64} />;
```

## Text

```tsx
import { CyberCut } from '@lobehub/icons';

export default () => <CyberCut.Text size={48} />;
```

## Combine

```tsx
import { CyberCut } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CyberCut.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { CyberCut } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <CyberCut.Avatar size={64} />
    <CyberCut.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { CyberCut } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={CyberCut.colorPrimary} />
  </Flexbox>
);
```
