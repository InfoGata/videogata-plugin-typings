# videogata-plugin-typings

[![npm (scoped)](https://img.shields.io/npm/v/@infogata/videogata-plugin-typings)](https://www.npmjs.com/package/@infogata/videogata-plugin-typings)

Types for [videogata](https://github.com/InfoGata/videogata) plugins.

## Installation

```sh
npm i --save-dev @infogata/videogata-plugin-typings
```

## Usage

Configure _tsconfig.json_

```js
{
  "compilerOptions": {
    "typeRoots": [
      "./node_modules/@types",
      "./node_modules/@infogata"
    ]
  }
}
```

or

Import in script

```js
import "@infogata/videogata-plugin-typings";
```
