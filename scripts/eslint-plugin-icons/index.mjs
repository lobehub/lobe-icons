/**
 * Local ESLint plugin for lobe-icons icon component conventions.
 * Registered in eslint.config.mjs for `src/<Brand>/components/**`.
 */
import brandViewbox from './rules/brand-viewbox.mjs';
import noHardcodedSvgId from './rules/no-hardcoded-svg-id.mjs';
import textViewbox from './rules/text-viewbox.mjs';

const plugin = {
  meta: { name: 'eslint-plugin-icons' },
  rules: {
    'brand-viewbox': brandViewbox,
    'no-hardcoded-svg-id': noHardcodedSvgId,
    'text-viewbox': textViewbox,
  },
};

export default plugin;
