const escapeRegExp = (value: string) => value.replaceAll(/[$()*+.?[\\\]^{|}]/g, '\\$&');

/** Match a real `id` attribute, not names that merely end in `id` such as `data-id`. */
const quotedIdAttr = /(?:^|[\s"'<])id=(["'])([^"']+)\1/gi;
const unquotedIdAttr = /(?:^|[\s"'<])id=([^\s"'<=>`]+)/gi;

const collectSvgIds = (svg: string): string[] => {
  const ids = new Set<string>();

  for (const match of svg.matchAll(quotedIdAttr)) {
    ids.add(match[2]);
  }

  for (const match of svg.matchAll(unquotedIdAttr)) {
    const id = match[1];
    if (!id.startsWith('"') && !id.startsWith("'")) ids.add(id);
  }

  return [...ids].toSorted((a, b) => b.length - a.length);
};

const rewriteAriaIdRefs = (svg: string, scopedIds: Map<string, string>): string =>
  svg.replaceAll(
    /(aria-(?:labelledby|describedby|controls|owns|activedescendant)=)(["'])([^"']*)\2/gi,
    (full, attr: string, quote: string, value: string) => {
      const next = value
        .split(/(\s+)/)
        .map((token) => scopedIds.get(token) ?? token)
        .join('');
      return `${attr}${quote}${next}${quote}`;
    },
  );

/**
 * Scope SVG `id` attributes (and their url(#id) / href / ARIA references) so the
 * same markup can be inlined more than once on a page without duplicate HTML ids.
 */
export const scopeSvgIds = (svg: string, scope: string): string => {
  const safeScope = scope.replaceAll(/[^\w-]/g, '') || 'svg';
  const ids = collectSvgIds(svg);
  if (ids.length === 0) return svg;

  const scopedIds = new Map(ids.map((id) => [id, `${safeScope}-${id}`]));
  let result = svg;
  for (const [id, scoped] of scopedIds) {
    const escaped = escapeRegExp(id);
    result = result
      .replaceAll(new RegExp(`(?<=[\\s"'<])id=(["'])${escaped}\\1`, 'g'), `id=$1${scoped}$1`)
      .replaceAll(new RegExp(`(?<=[\\s"'<])id=${escaped}(?=[\\s>/])`, 'g'), `id=${scoped}`)
      .replaceAll(new RegExp(`url\\((['"]?)#${escaped}\\1\\)`, 'gi'), `url($1#${scoped}$1)`)
      .replaceAll(new RegExp(`(xlink:)?href=(["'])#${escaped}\\2`, 'gi'), `$1href=$2#${scoped}$2`);
  }
  return rewriteAriaIdRefs(result, scopedIds);
};
