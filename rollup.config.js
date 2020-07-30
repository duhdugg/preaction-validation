import { getBabelOutputPlugin } from '@rollup/plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

export default {
  input: 'lib/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      plugins: [
        getBabelOutputPlugin({
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
                targets: 'maintained node versions',
              },
            ],
          ],
        }),
      ],
    },
    {
      file: pkg.module,
      format: 'esm',
    },
    {
      file: 'dist/preaction-validation.umd.min.js',
      name: '@preaction/validation',
      format: 'umd',
      plugins: [
        getBabelOutputPlugin({
          allowAllFormats: true,
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false,
                targets: 'defaults',
              },
            ],
          ],
        }),
        uglify(),
      ],
    },
  ],
}
