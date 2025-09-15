---
nav: Components
group: Provider
title: SubModel
atomId: SubModel
description: https://submodel.ai
---

## Icons

```tsx
import { SubModel } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <SubModel size={64} />
    <SubModel.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { SubModel } from '@lobehub/icons';

export default () => <SubModel.Text size={48} />;
```

## Combine

```tsx
import { SubModel } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <SubModel.Combine size={64} />
    <SubModel.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { SubModel } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <SubModel.Avatar size={64} />
    <SubModel.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { SubModel } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={SubModel.colorPrimary} />
  </Flexbox>
);
```
