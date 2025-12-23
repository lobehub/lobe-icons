---
nav: Components
group: Provider
title: BaiduCloud (百度智能云)
atomId: BaiduCloud
description: https://cloud.baidu.com
---

## Icons

```tsx
import { BaiduCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <BaiduCloud size={64} />
    <BaiduCloud.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { BaiduCloud } from '@lobehub/icons';

export default () => <BaiduCloud.Text size={48} />;
```

## Combine

```tsx
import { BaiduCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} align={'flex-start'}>
    <BaiduCloud.Combine size={64} />
    <BaiduCloud.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { BaiduCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

export default () => (
  <Flexbox gap={16} horizontal>
    <BaiduCloud.Avatar size={64} />
    <BaiduCloud.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { BaiduCloud } from '@lobehub/icons';
import { Flexbox } from '@lobehub/ui';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={BaiduCloud.colorPrimary} />
  </Flexbox>
);
```
