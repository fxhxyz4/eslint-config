### @fxhxyz/prettier-config

#

### how to use?
+ ***npm***
```
npm install @fxhxyz/eslint-config -D
```

+ ***yarn***
```
yarn add @fxhxyz/eslint-config -D
```

+ ***pnpm***
```
pnpm add @fxhxyz/eslint-config -D
```

+ ***usage commonjs***
```js
// .prettierrc.cjs
const config = require("@fxhxyz/prettier-config").default;
module.exports = config;


// package.json
"scripts": {
    "format": "prettier --write ."
}
```

+ ***usage es6***
```js
// .prettierrc.mjs/.js
import config from "@fxhxyz/prettier-config";
export { config };

// package.json
"scripts": {
    "lint": "eslint ."
}
```
