import { elementName, getAttribute } from '../utils.mjs';

const ID_ELEMENTS = new Set(['clipPath', 'filter', 'linearGradient', 'mask', 'radialGradient']);
const HOOKS = new Set(['useFillId', 'useFillIds']);
/** `url(#` followed by a literal id character (not the start of a `${…}` interpolation). */
const LITERAL_URL_REF = /url\(\s*["']?#(?!\$\{)[^\s"')]/u;

const calleeName = (call) => {
  const { callee } = call;
  if (callee.type === 'Identifier') return callee.name;
  if (callee.type === 'MemberExpression' && !callee.computed) return callee.property.name;
  return undefined;
};

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'problem',
    docs: {
      description:
        'gradient / mask / clipPath / filter ids must come from useFillId / useFillIds, and `url(#…)` must not be hardcoded.',
    },
    messages: {
      hardcodedId:
        '<{{element}}> id "{{value}}" is hardcoded. Ids must be unique per instance: use `useFillId` / `useFillIds` from `@/hooks/useFillId`.',
      hardcodedUrl:
        'Hardcoded `url(#…)` reference "{{value}}". Use the `fill` returned by `useFillId` / `useFillIds`.',
      untrackedId: '<{{element}}> id must come from `useFillId` / `useFillIds` (e.g. `id={a.id}`).',
    },
    schema: [],
  },
  create(context) {
    /** Locals bound to a hook's `id` (`const { id } = useFillId(...)`). */
    const idLocals = new Set();
    /** Locals bound to one `{ id, fill }` object (`const a = useFillId(...)`, `const [a, b] = useFillIds(...)`). */
    const objectLocals = new Set();
    /** Locals bound to the whole `useFillIds` array (`const ids = useFillIds(...)`). */
    const arrayLocals = new Set();
    const pendingIds = [];

    const bindPattern = (pattern, isArrayResult) => {
      if (pattern.type === 'Identifier') {
        (isArrayResult ? arrayLocals : objectLocals).add(pattern.name);
      } else if (pattern.type === 'ObjectPattern' && !isArrayResult) {
        for (const prop of pattern.properties) {
          if (prop.type !== 'Property') continue;
          const key = prop.key.type === 'Identifier' ? prop.key.name : prop.key.value;
          const target = prop.value.type === 'AssignmentPattern' ? prop.value.left : prop.value;
          if (key === 'id' && target.type === 'Identifier') idLocals.add(target.name);
        }
      } else if (pattern.type === 'ArrayPattern' && isArrayResult) {
        for (const element of pattern.elements) {
          if (!element) continue;
          const target = element.type === 'AssignmentPattern' ? element.left : element;
          bindPattern(target, false);
        }
      }
    };

    const isTracked = (expression) => {
      if (expression.type === 'Identifier') return idLocals.has(expression.name);
      if (expression.type !== 'MemberExpression') return false;
      const isIdProp = expression.computed
        ? expression.property.type === 'Literal' && expression.property.value === 'id'
        : expression.property.name === 'id';
      if (!isIdProp) return false;
      const { object } = expression;
      if (object.type === 'Identifier') return objectLocals.has(object.name);
      return object.type === 'MemberExpression' &&
        object.computed &&
        object.object.type === 'Identifier'
        ? arrayLocals.has(object.object.name)
        : false;
    };

    const checkUrl = (node, value) => {
      if (typeof value === 'string' && LITERAL_URL_REF.test(value)) {
        context.report({ data: { value }, messageId: 'hardcodedUrl', node });
      }
    };

    return {
      'JSXOpeningElement': function (node) {
        const element = elementName(node);
        if (!ID_ELEMENTS.has(element)) return;
        const attr = getAttribute(node, 'id');
        if (attr) pendingIds.push({ attr, element });
      },
      'Literal': function (node) {
        checkUrl(node, node.value);
      },
      'Program:exit': function () {
        for (const { attr, element } of pendingIds) {
          const { value } = attr;
          if (!value) continue;
          if (value.type === 'Literal') {
            context.report({
              data: { element, value: String(value.value) },
              messageId: 'hardcodedId',
              node: attr,
            });
            continue;
          }
          if (value.type !== 'JSXExpressionContainer') continue;
          const { expression } = value;
          if (
            expression.type === 'Literal' ||
            (expression.type === 'TemplateLiteral' && expression.expressions.length === 0)
          ) {
            const text =
              expression.type === 'Literal'
                ? String(expression.value)
                : expression.quasis[0].value.cooked;
            context.report({
              data: { element, value: text },
              messageId: 'hardcodedId',
              node: attr,
            });
          } else if (!isTracked(expression)) {
            context.report({ data: { element }, messageId: 'untrackedId', node: attr });
          }
        }
      },
      'TemplateElement': function (node) {
        checkUrl(node, node.value.cooked);
      },
      'VariableDeclarator': function (node) {
        const init = node.init?.type === 'CallExpression' ? node.init : undefined;
        if (!init) return;
        const name = calleeName(init);
        if (!HOOKS.has(name)) return;
        bindPattern(node.id, name === 'useFillIds');
      },
    };
  },
};
