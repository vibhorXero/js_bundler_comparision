const esbuild = require('esbuild');
const cssPlugin = require('esbuild-css-modules-plugin');

esbuild
  .build({
    entryPoints: ['src/index.jsx'],
    bundle: true,
    outfile: 'dist/bundle.js',
    loader: {
      '.js': 'jsx',
    },
    plugins: [cssPlugin()],
  })
  .catch(() => process.exit(1));
