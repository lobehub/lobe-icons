---
nav: Components
group: Model
title: Wenxin (文心)
atomId: Wenxin
description: https://yiyan.baidu.com
---

## Icons

```tsx
import { Wenxin } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Wenxin size={64} />
    <Wenxin.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Wenxin } from '@lobehub/icons';

export default () => <Wenxin.Text size={48} />;
```

## Combine

```tsx
import { Wenxin } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <Wenxin.Combine size={64} />
    <Wenxin.Combine size={64} type={'color'} />
    <Wenxin.Combine size={64} type={'color'} extra={'一言'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Wenxin } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Wenxin.Avatar size={64} background={Wenxin.colorPrimary} />
    <Wenxin.Avatar size={64} />
    <Wenxin.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Wenxin } from '@lobehub/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Wenxin.colorPrimary} />
    <ColorPreview color={Wenxin.colorGradient} />
  </Flexbox>
);
```
