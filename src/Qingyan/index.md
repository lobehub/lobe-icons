---
nav: Components
group: Application
title: Qingyan (智谱清言)
atomId: Qingyan
description: https://chatglm.cn
---

## Icons

```tsx
import { Qingyan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Qingyan size={64} />
    <Qingyan.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Qingyan } from '@lobehub/icons';

export default () => <Qingyan.Text size={48} />;
```

## Combine

```tsx
import { Qingyan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Qingyan.Combine size={64} />
    <Qingyan.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Qingyan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Qingyan.Avatar size={64} />
    <Qingyan.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Qingyan } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Qingyan.colorPrimary} />
  </Flexbox>
);
```
