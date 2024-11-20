import { kebabCase } from 'lodash-es';

export const customKebabCase = (string: string) => {
  const parts = string.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g);

  if (!parts) return string;

  return parts
    .map((part) => {
      if (/\d/.test(part)) {
        return part.toLowerCase();
      }

      return kebabCase(part);
    })
    .join('-');
};
