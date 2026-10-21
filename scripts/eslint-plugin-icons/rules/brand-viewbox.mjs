import { getAttribute, getStaticValue, isRootSvg, isTextComponent } from '../utils.mjs';

const EXPECTED = '0 0 24 24';

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Brand icon components (everything except Text) must render on a `0 0 24 24` viewBox.',
    },
    messages: {
      dynamic: 'The <svg> viewBox must be the static string "{{expected}}".',
      missing: 'The <svg> of a brand icon component needs viewBox="{{expected}}".',
      wrong:
        'Brand icon viewBox must be "{{expected}}", got "{{actual}}". Transform the paths with svgpath instead of editing the numbers.',
    },
    schema: [],
  },
  create(context) {
    if (isTextComponent(context.filename)) return {};
    return {
      JSXOpeningElement(node) {
        if (!isRootSvg(node)) return;
        const attr = getAttribute(node, 'viewBox');
        if (!attr) {
          context.report({ data: { expected: EXPECTED }, messageId: 'missing', node });
          return;
        }
        const value = getStaticValue(attr);
        if (value === undefined) {
          context.report({ data: { expected: EXPECTED }, messageId: 'dynamic', node: attr });
          return;
        }
        if (
          value
            .trim()
            .split(/[\s,]+/)
            .join(' ') !== EXPECTED
        ) {
          context.report({
            data: { actual: value, expected: EXPECTED },
            messageId: 'wrong',
            node: attr,
          });
        }
      },
    };
  },
};
