---
nav: Components
group: Provider
title: LeptonAI
atomId: LeptonAI
description: https://lepton.ai
---

## Icons

```tsx
import { LeptonAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LeptonAI size={64} />
    <LeptonAI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { LeptonAI } from '@lobehub/icons';

export default () => <LeptonAI.Text size={48} />;
```

## Combine

```tsx
import { LeptonAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <LeptonAI.Combine size={64} />
    <LeptonAI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { LeptonAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <LeptonAI.Avatar size={64} />
    <LeptonAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { LeptonAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={LeptonAI.colorPrimary} />
  </Flexbox>
);
```
