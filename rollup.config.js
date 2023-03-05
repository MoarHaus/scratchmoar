const {nodeResolve} = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const {babel} = require('@rollup/plugin-babel')
const vue = require('rollup-plugin-vue')

module.exports = [
  {
    input: 'src/scratchmoar.js',

    output: {
      name: 'scratchmoar',
      format: 'umd',
      dir: 'dist'
    },

    plugins: [
      vue(),
      babel({
        babelHelpers: 'runtime',
        plugins: [
          '@babel/plugin-transform-runtime',
          '@babel/plugin-proposal-optional-chaining'
        ]
      }),
      commonjs({include: /node_modules/}),
      nodeResolve()
    ]
  }
]