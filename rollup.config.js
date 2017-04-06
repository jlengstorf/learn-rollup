// Rollup plugins
import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import nodePackageResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import istanbul from 'rollup-plugin-istanbul';

// PostCSS plugins
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

export default {
  entry: 'src/scripts/main.js',
  dest: 'build/js/main.min.js',
  format: 'iife',
  sourceMap: 'true',
  plugins: [
    // bundle css
    postcss({
      plugins: [
        simplevars(),
        nested(),
        cssnext({ warnForDuplicates: false, }),
        cssnano(),
      ],
      extensions: [ '.css' ],
    }),
    // linter (see .eslintrc.json)
    eslint({
      exclude: [
        'src/styles/**',
      ]
    }),
    // transpile es6 (see .babelrc)
    babel({
      exclude: 'node_modules/**',
      presets: [ 'es2015-rollup' ],
      babelrc: false,
      plugins: [
        "external-helpers"
      ]
    }),
    // include istanbul metrics in the bundle (development only)
    // note this is not used unless tests are loading the build/js bundle
    // - currently they are not
    (process.env.NODE_ENV !== 'production' && istanbul({
      exclude: ['test/**/*', 'node_modules/**/*']
    })),
    // find node_modules
    nodePackageResolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    // import node_modules
    commonjs(),
    // include the ENV so it can be evaluated at runtime
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    // uglify/minify only in production
    (process.env.NODE_ENV === 'production' && uglify())
  ],
};
