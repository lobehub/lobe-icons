import { useMemo } from 'react';

export const useFillId = (namespace: string) => {
  const id = `lobe-icons-${namespace.toLowerCase()}-fill`;
  return useMemo(
    () => ({
      fill: `url(#${id})`,
      id,
    }),
    [namespace],
  );
};

export const useFillIds = (namespace: string, length: number) => {
  return useMemo(() => {
    const ids = Array.from({ length }, (_, i) => {
      const id = `lobe-icons-${namespace.toLowerCase()}-fill-${i}`;
      return {
        fill: `url(#${id})`,
        id,
      };
    });
    return ids;
  }, [namespace]);
};
