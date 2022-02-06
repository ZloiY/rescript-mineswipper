import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.bs.js',
  output: {
    dir: 'build',
    format: 'iife'
  },
  plugins: [nodeResolve()]
};