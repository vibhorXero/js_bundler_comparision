# JS Bundlers

This project is to compare build times for different JS Bundlers for a simple react app.

To run the different bundlers:

### Esbuild

1. Install required dependencies
```shell
npm install
```
2. Run bundler
```shell
node build.js
```

### Parcel

1. Install required dependencies
```shell
npm install
```
2. Run bundler
```shell
npx parcel build index.html --out-dir dist --public-url ./
```

### Rollup.js

1. Install required dependencies
```shell
npm install
```
2. Run bundler
```shell
npx rollup -c
```

### Vite

1. Install required dependencies
```shell
npm install
```
2. Run bundler
```shell
npx vite build
```

### Webpack

1. Install required dependencies
```shell
npm install
```
2. Run bundler
```shell
npx webpack
```
