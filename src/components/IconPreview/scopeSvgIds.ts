const escapeRegExp = (value: string) => value.replaceAll(/[$()*+.?[\\\]^{|}]/g, '\\$&');

const collectSvgIds = (svg: string): string[] => {
  const ids = new Set<string>();

  for (const match of svg.matchAll(/\bid=(["'])([^"']+)\1/gi)) {
    ids.add(match[2]);
  }

  for (const match of svg.matchAll(/\bid=([^\s"'<=>`]+)/gi)) {
    const id = match[1];
    if (!id.startsWith('"') && !id.startsWith("'")) ids.add(id);
  }

  return [...ids].toSorted((a, b) => b.length - a.length);
};

/**
 * Scope SVG `id` attributes (and their url(#id) / href references) so the same
 * markup can be inlined more than once on a page without duplicate HTML ids.
 */
export const scopeSvgIds = (svg: string, scope: string): string => {
  const safeScope = scope.replaceAll(/[^\w-]/g, '') || 'svg';
  const ids = collectSvgIds(svg);
  if (ids.length === 0) return svg;

  let result = svg;
  for (const id of ids) {
    const scoped = `${safeScope}-${id}`;
    const escaped = escapeRegExp(id);
    result = result
      .replaceAll(new RegExp(`\\bid=(["'])${escaped}\\1`, 'g'), `id=$1${scoped}$1`)
      .replaceAll(new RegExp(`\\bid=${escaped}(?=[\\s>/])`, 'g'), `id=${scoped}`)
      .replaceAll(new RegExp(`url\\((['"]?)#${escaped}\\1\\)`, 'gi'), `url($1#${scoped}$1)`)
      .replaceAll(new RegExp(`(xlink:)?href=(["'])#${escaped}\\2`, 'gi'), `$1href=$2#${scoped}$2`);
  }
  return result;
};
