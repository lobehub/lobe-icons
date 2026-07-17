import { kebabCase } from 'es-toolkit';

export const docsKebabCase = (string: string) =>
  string
    .replaceAll(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replaceAll(/([\da-z])([A-Z])/g, '$1-$2')
    .replaceAll(/['’]/g, '')
    .replaceAll(/[^\dA-Za-z]+/g, '-')
    .replaceAll(/^-|-$/g, '')
    .toLowerCase();

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
