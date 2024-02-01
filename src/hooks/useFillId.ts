export const useFillId = (namespace: string) => {
  const id = `lobe-icons-${namespace}-fill`;
  return {
    fill: `url(#${id})`,
    id,
  };
};

export const useFillIds = (namespace: string, length: number) => {
  const ids = Array.from({ length }, (_, i) => {
    const id = `lobe-icons-${namespace}-fill-${i}`;
    return {
      fill: `url(#${id})`,
      id,
    };
  });
  return ids;
};
