import { kebabCase } from 'es-toolkit';
import { useId } from 'vue';

export const useFillId = (namespace: string) => {
  const id = `lobe-icons-${kebabCase(namespace)}-${useId()}`;
  return { fill: `url(#${id})`, id };
};

export const useFillIds = (namespace: string, length: number) => {
  const id = useId();
  return Array.from({ length }, (_, index) => {
    const fillId = `lobe-icons-${kebabCase(namespace)}-${index}-${id}`;
    return { fill: `url(#${fillId})`, id: fillId };
  });
};
