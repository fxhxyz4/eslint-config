module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  ignorePatterns: [
    "dist",
    "build",
    "node_modules",
    ".vscode",
    ".github",
    ".turbo",
    ".svelte-kit",
    ".angular",
    ".next",
    ".nuxt",
    "*.config.ts",
    "*.config.js",
    ".eslintrc.*",
    ".babelrc",
  ],
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["node", "prettier"],
  rules: {
    "no-console": "warn",
    "no-multi-spaces": "warn",
    indent: ["error", 2],
    "eol-last": ["warn", "always"],
    "object-curly-spacing": ["warn", "always"],
    "comma-dangle": ["warn", "always-multiline"],
    yoda: ["warn", "never", { exceptRange: true }],
    "no-trailing-spaces": ["warn", { skipBlankLines: true }],
    "block-spacing": ["warn", "always"],
    "no-unsafe-negation": ["warn", { enforceForOrderingRelations: true }],
    "multiline-ternary": ["warn", "always-multiline"],
    "no-unused-vars": "warn",
    "no-process-exit": "off",
    "node/no-extraneous-require": "error",
    "node/no-unpublished-require": "error",
    "node/exports-style": ["warn", "module.exports"],
    "no-prototype-builtins": "warn",
    "no-shadow-restricted-names": "error",
    "node/no-missing-require": "error",
    "no-new-func": "error",
    "prefer-async-await": "warn",
    "node/no-unpublished-bin": "error",
    "max-len": ["error", { code: 120 }],
    "node/global-require": "warn",
    "node/no-new-require": "error",
    "node/no-unsupported-features/es-syntax": "error",
    eqeqeq: "error",
    "no-var": "error",
    "prefer-const": "error",
    strict: ["error", "global"],
    semi: ["error", "never"],
    quotes: ["error", "double"],
    "arrow-parens": ["error", "as-needed"],
    "no-duplicate-imports": "error",
    "no-magic-numbers": ["warn", { ignore: [0, 1] }],
  },
};
