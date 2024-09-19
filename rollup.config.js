import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',  // ESM build
      format: 'es'
    },
  ],
  plugins: [
    typescript()
  ],
  external: [] // Add external dependencies as needed
};