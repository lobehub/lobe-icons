'use client';

import * as Icons from '@lobehub/icons';
import { Flexbox, Grid, SearchBar, TooltipGroup } from '@lobehub/ui';
import { Empty, Segmented } from 'antd';
import { cssVar } from 'antd-style';
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
      <Flexbox align={'center'} gap={12} horizontal>
        <SearchBar
          allowClear
          defaultValue={keyword}
          onSearch={(v) => setKeyword(v)}
          placeholder={'Search by brand or model keywords...'}
          style={{ width: '100%' }}
          type={'block'}
        />
        <Segmented
          defaultValue={type}
          onChange={(v) => setType(v)}
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
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </TooltipGroup>
    </Flexbox>
  );
});

export default Dashboard;
