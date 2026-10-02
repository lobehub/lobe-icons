const config = require('@lobehub/lint').eslint;
const { restrictedImports } = require('./node_modules/@lobehub/ui/es/eslint/index.mjs');

// ESLint 8 keys `paths` by module name, so a second `antd` entry would overwrite the first.
const [level, options] = restrictedImports.rules['no-restricted-imports'];
const paths = Object.values(
  options.paths.reduce((acc, path) => {
    const prev = acc[path.name];
    acc[path.name] =
      prev?.importNames && path.importNames
        ? { ...prev, importNames: [...prev.importNames, ...path.importNames] }
        : path;
    return acc;
  }, {}),
);

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    'no-restricted-imports': [level, { ...options, paths }],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
};
