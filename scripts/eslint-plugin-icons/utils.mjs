/** Shared helpers for the lobe-icons ESLint rules. */

export const getAttribute = (openingElement, name) =>
  openingElement.attributes.find(
    (attr) =>
      attr.type === 'JSXAttribute' && attr.name.type === 'JSXIdentifier' && attr.name.name === name,
  );

/** Static string value of a JSX attribute (`a="x"`, `a={'x'}`, `a={`x`}`), or `undefined` when dynamic. */
export const getStaticValue = (attr) => {
  const { value } = attr;
  if (!value) return undefined;
  if (value.type === 'Literal' && typeof value.value === 'string') return value.value;
  if (value.type === 'JSXExpressionContainer') {
    const { expression } = value;
    if (expression.type === 'Literal' && typeof expression.value === 'string')
      return expression.value;
    if (expression.type === 'TemplateLiteral' && expression.expressions.length === 0) {
      return expression.quasis[0].value.cooked;
    }
  }
  return undefined;
};

export const elementName = (openingElement) =>
  openingElement.name.type === 'JSXIdentifier' ? openingElement.name.name : undefined;

/** The outermost `<svg>` of a component: an `svg` element with no `svg` ancestor. */
export const isRootSvg = (node) => {
  if (elementName(node) !== 'svg') return false;
  let parent = node.parent?.parent;
  while (parent) {
    if (parent.type === 'JSXElement' && elementName(parent.openingElement) === 'svg') return false;
    parent = parent.parent;
  }
  return true;
};

const basename = (filename) => filename.split(/[/\\]/).pop() ?? '';

/**
 * Wordmark components: `Text` and its variants (`TextCn`, `TextColor`, …) plus the horizontal
 * logo+wordmark lockups (`Brand`, `BrandColor`, `BrandMono`). They are W×24 and sized by height only.
 * Every other component (`Color`, `Mono`, …) is a square brand icon.
 */
export const isTextComponent = (filename) =>
  /^(?:Text|Brand)[A-Za-z]*\.[cm]?[jt]sx?$/.test(basename(filename));
