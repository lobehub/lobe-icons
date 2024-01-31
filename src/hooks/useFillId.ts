export const useFillId = (namespace: string) => {
  const id = `lobe-icons-${namespace}-fill`;
  return {
    fill: `url(#${id})`,
    id,
  };
};
