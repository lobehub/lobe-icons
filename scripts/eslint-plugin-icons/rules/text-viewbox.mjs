import { getAttribute, getStaticValue, isRootSvg, isTextComponent } from '../utils.mjs';

const NUMBER = String.raw`\d+(?:\.\d+)?`;
const TEXT_VIEWBOX = new RegExp(String.raw`^0[\s,]+0[\s,]+(${NUMBER})[\s,]+24$`);

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    type: 'problem',
    docs: {
      description:
        'Text (wordmark) components must use a `0 0 W 24` viewBox and size only by `height={size}` (no `width`).',
    },
    messages: {
      dynamicViewBox: 'The wordmark <svg> viewBox must be a static "0 0 W 24" string.',
      height: 'The wordmark <svg> must set `height={size}`.',
      missingViewBox: 'The wordmark <svg> needs a viewBox of the form "0 0 W 24".',
      width:
        'The wordmark <svg> must not set `width`; its width follows from `height={size}` and the viewBox.',
      wrongViewBox:
        'Wordmark viewBox must be "0 0 W 24" (height exactly 24), got "{{actual}}". Transform the paths with svgpath instead of editing the numbers.',
    },
    schema: [],
  },
  create(context) {
    if (!isTextComponent(context.filename)) return {};
    return {
      JSXOpeningElement(node) {
        if (!isRootSvg(node)) return;

        const viewBox = getAttribute(node, 'viewBox');
        if (!viewBox) {
          context.report({ messageId: 'missingViewBox', node });
        } else {
          const value = getStaticValue(viewBox);
          if (value === undefined) context.report({ messageId: 'dynamicViewBox', node: viewBox });
          else if (
            !TEXT_VIEWBOX.test(value.trim()) ||
            Number(TEXT_VIEWBOX.exec(value.trim())[1]) <= 0
          ) {
            context.report({ data: { actual: value }, messageId: 'wrongViewBox', node: viewBox });
          }
        }

        const width = getAttribute(node, 'width');
        if (width) context.report({ messageId: 'width', node: width });

        const height = getAttribute(node, 'height');
        const isSize =
          height?.value?.type === 'JSXExpressionContainer' &&
          height.value.expression.type === 'Identifier' &&
          height.value.expression.name === 'size';
        if (!isSize) context.report({ messageId: 'height', node: height ?? node });
      },
    };
  },
};
