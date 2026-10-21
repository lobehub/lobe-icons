import { stylelint } from '@lobehub/lint';

export default {
  ...stylelint,
  rules: {
    ...stylelint.rules,
    'custom-property-pattern': null,
    'selector-pseudo-element-no-unknown': null,
    'no-descending-specificity': null,
  },
};
