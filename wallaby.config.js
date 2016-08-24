module.exports = wallaby => ({
  files: ['lessons/**/*', '*.json', 'helpers/**/*', '!lessons/**/*.koan.js'],
  tests: ['lessons/**/*.koan.js'],
  env: { type: 'node' },
  compilers: {
    '**/*.js': wallaby.compilers.babel()
  },
  setup: () => {
    require('babel-polyfill');
    require('./helpers')
  },
  debug: true
});
