import { kebabCase } from 'es-toolkit';
import { useMemo } from 'react';

export const useFillId = (namespace: string) => {
  const id = `lobe-icons-${kebabCase(namespace)}-fill`;
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
      const id = `lobe-icons-${kebabCase(namespace)}-fill-${i}`;
      return {
        fill: `url(#${id})`,
        id,
      };
    });
    return ids;
  }, [namespace, length]);
};
