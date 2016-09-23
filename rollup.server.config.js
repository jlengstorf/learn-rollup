// Rollup plugins

export default {
  entry: 'app.js',
  dest: 'server/app.js',
  format: 'cjs',
  external: [ 'express', 'hbs' ]
};
