'use client';

import * as Icons from '@lobehub/icons';
import { cssVar, Empty, Flexbox, Grid, SearchBar, Segmented, TooltipGroup } from '@lobehub/ui';
import { memo, useMemo, useState } from 'react';

import IconItem from './IconItem';

enum ColorType {
  Color = 'color',
  Mono = 'mono',
}

const Dashboard = memo(() => {
  const [type, setType] = useState<ColorType>(ColorType.Color);
  const [keyword, setKeyword] = useState<string>();

  const iconsGroup = useMemo(
    () =>
      Object.entries(Icons).filter(([key, Icon]: [string, any]) => {
        if (!Icon.title) return false;
        if (
          keyword &&
          !key.toLowerCase().includes(keyword.toLowerCase()) &&
          !Icon.title.toLowerCase().includes(keyword.toLowerCase())
        )
          return false;
        return true;
      }),
    [keyword],
  );

  const isMono = type === ColorType.Mono;

  return (
    <Flexbox gap={16} style={{ maxWidth: 960 }} width={'100%'}>
      <Flexbox horizontal align={'center'} gap={12}>
        <SearchBar
          allowClear
          defaultValue={keyword}
          placeholder={'Search by brand or model keywords...'}
          style={{ width: '100%' }}
          type={'block'}
          onSearch={(v) => setKeyword(v)}
        />
        <Segmented
          defaultValue={type}
          options={[
            {
              label: 'Color',
              value: ColorType.Color,
            },
            {
              label: 'Mono',
              value: ColorType.Mono,
            },
          ]}
          style={{
            border: `1px solid ${cssVar.colorBorder}`,
          }}
          onChange={(v) => setType(v)}
        />
      </Flexbox>
      <TooltipGroup>
        {iconsGroup.length > 0 ? (
          <Grid maxItemWidth={160} rows={5}>
            {iconsGroup.map(([key, Icon]: [string, any]) => {
              const IconRender = isMono ? Icon : Icon.Color || Icon;
              return (
                <IconItem color={Icon.colorPrimary} id={key} key={key} title={Icon.title}>
                  <IconRender size={56} />
                </IconItem>
              );
            })}
          </Grid>
        ) : (
          <Empty description={'No Data'} />
        )}
      </TooltipGroup>
    </Flexbox>
  );
});

export default Dashboard;
