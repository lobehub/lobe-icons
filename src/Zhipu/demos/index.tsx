import { IconShowcase, Zhipu } from '@lobehub/icons';

export default () => {
  return (
    <IconShowcase
      avatar={
        <>
          <Zhipu.Avatar size={98} />
          <Zhipu.Avatar shape={'square'} size={98} />
        </>
      }
      color={<Zhipu.Color />}
      combine={
        <>
          <Zhipu.Combine size={72} type={'mono'} />
          <Zhipu.Combine size={72} />
        </>
      }
      mono={<Zhipu.Mono />}
      primaryColor={Zhipu.colorPrimary}
      text={<Zhipu.Text />}
    />
  );
};
