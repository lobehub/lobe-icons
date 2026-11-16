/* eslint-disable @typescript-eslint/no-require-imports -- semantic-release 21 loads its CJS config synchronously. */
const release = require('../../.releaserc.cjs');
const { withSharedSourceCommits } = require('./scripts/release.cjs');

module.exports = withSharedSourceCommits(release);
