---
nav: Components
group: Application
title: CrewAI
atomId: CrewAI
description: https://crewai.com
---

## Icons

```tsx
import { CrewAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <CrewAI size={64} />
    <CrewAI.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { CrewAI } from '@lobehub/icons';

export default () => <CrewAI.Text size={48} />;
```

## Brand

```tsx
import { CrewAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CrewAI.Brand size={48} />
    <CrewAI.BrandColor size={48} />
  </Flexbox>
);
```

## Combine

```tsx
import { CrewAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <CrewAI.Combine size={64} />
    <CrewAI.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { CrewAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <CrewAI.Avatar size={64} />
    <CrewAI.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { CrewAI } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={CrewAI.colorPrimary} />
  </Flexbox>
);
```
