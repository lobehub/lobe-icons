import * as Icons from '@lobehub/icons';
import { StoryBook, useControls, useCreateStore } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Flexbox } from 'react-layout-kit';

const data = Object.values(Icons).filter((icon: any) => icon?.colorPrimary);

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    overflow: hidden;

    max-width: 960px;
    margin-top: -4%;

    border: 1px solid ${token.colorBorder};
    border-radius: ${token.borderRadiusLG}px;
  `,
  item: css`
    width: 96px;
    height: 96px;
    background: ${token.colorBgContainer};
  `,
}));

export default () => {
  const { styles } = useStyles();
  const store = useCreateStore();

  const { size, color, monochrome } = useControls(
    {
      color: {
        color: true,
        value: '#fff',
      },
      monochrome: true,
      size: {
        max: 96,
        min: 16,
        step: 1,
        value: 48,
      },
    },
    { store },
  );

  return (
    <StoryBook className={styles.container} levaStore={store}>
      <Flexbox align={'center'} gap={4} horizontal justify={'center'} style={{ flexWrap: 'wrap' }}>
        {data.map((Icon: any, index) => {
          const IconRender = !monochrome && Icon.Color ? Icon.Color : Icon;

          return (
            <Flexbox align={'center'} className={styles.item} justify={'center'} key={index}>
              <IconRender color={color === '#fff' ? undefined : color} size={size} />
            </Flexbox>
          );
        })}
      </Flexbox>
    </StoryBook>
  );
};
