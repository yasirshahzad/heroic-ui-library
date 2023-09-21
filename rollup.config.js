import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDeps from 'rollup-plugin-peer-deps-external';
import styles from 'rollup-plugin-styles';
import { externalAssets } from 'rollup-plugin-external-assets';

import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import { getFiles } from './scripts/buildUtils';
import externalGlobals from 'rollup-plugin-external-globals';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];
const excludeExtensions = [
  'test.js',
  'test.ts',
  'test.jsx',
  'test.tsx',
  'spec.js',
  'spec.ts',
  'spec.jsx',
  'spec.tsx',
  'story.js',
  'story.ts',
  'story.jsx',
  'story.tsx',
];

/** @type {import('rollup').RollupOptions} */
export default {
  input: [
    './src/index.ts',
    ...getFiles('./src/components', extensions, excludeExtensions),
    ...getFiles('./src/hooks', extensions, excludeExtensions),
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    peerDeps(),
    externalAssets(['src/assets/*', 'src/components/**/assets/*']),
    styles({ modules: true }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    typescriptPaths(),
    externalGlobals({
      React: 'react',
      'react-dom': 'react-dom',
    }),
  ],
  external: ['react', 'react-dom', 'classnames'],
};
