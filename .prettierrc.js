const config = require('@lobehub/lint').prettier;

module.exports = {
  ...config,
  htmlWhitespaceSensitivity: 'ignore',
};
