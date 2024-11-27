---
nav: Components
group:
  title: Utils
  order: 999
title: getLobeIconCDN
apiHeader:
  docUrl: 'https://github.com/lobehub/lobe-icons/tree/master/docs/features/cdn-utils.md'
  sourceUrl: 'https://github.com/lobehub/lobe-icons/tree/master/src/features/getLobeIconCDN/index.tsx'
---

## Default

```tsx
import { getLobeIconCDN } from '@lobehub/icons';
import { Grid } from '@lobehub/ui';
import { useThemeMode } from 'antd-style';

export default () => {
  const { isDarkMode } = useThemeMode();
  const color = getLobeIconCDN('Claude');
  const mono = getLobeIconCDN('Claude', { type: 'mono', isDarkMode });
  const text = getLobeIconCDN('Claude', { type: 'text', isDarkMode });
  return (
    <Grid>
      <img height={48} src={color} alt="Claude" />
      <img height={48} src={mono} alt="Claude" />
      <img height={48} src={text} alt="Claude" />
    </Grid>
  );
};
```

## Options

```ts
export interface LobeIconCdnConfig {
  cdn?: 'aliyun' | 'unpkg';
  format?: 'svg' | 'png' | 'webp';
  isDarkMode?: boolean;
  type?: 'mono' | 'color' | 'text' | 'text-cn' | 'brand' | 'brand-color';
}
```
