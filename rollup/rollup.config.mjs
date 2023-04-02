import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss-modules'
import replace from '@rollup/plugin-replace';

import autoprefixer from 'autoprefixer'

export default {
    input: 'src/index.jsx',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: true,
    },
    plugins: [
        resolve({
            extensions: ['.js', '.jsx']
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-env', '@babel/preset-react'],
        }),
        terser(),
        postcss({
            extract: true,
            plugins: [autoprefixer()],
            writeDefinitions: true,
        }),
        replace({
            preventAssignment: false,
            'process.env.NODE_ENV': '"development"'
        })
    ],
};
