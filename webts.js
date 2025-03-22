module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 12,
    sourceType: "module",
  },
  env: {
    browser: true,
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
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/restrict-plus-operands": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/indent": ["warn", 2],
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
    "no-prototype-builtins": "warn",
    "no-shadow-restricted-names": "error",
    eqeqeq: "error",
    "no-var": "error",
    // "prefer-const": "error",
    strict: ["error", "global"],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "arrow-parens": ["error", "always"],
    "no-duplicate-imports": "error",
    "no-magic-numbers": ["warn", { ignore: [0, 1] }],
    "max-len": ["error", { code: 170 }],
  },
};
