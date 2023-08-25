module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "standard",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "eslint-config-prettier",
  ],
  parserOptions: {
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: false,
    modules: true,
    ecmaVersion: 2020,
  },
  env: {
    "jest/globals": true,
    es6: true,
    node: true,
  },
  rules: {
    "prettier/prettier": "error",
  },
  plugins: ["@typescript-eslint", "prettier", "jest", "promise"],
  ignorePatterns: [
    "dist",
    "node_modules",
    "packages/bot-kit-pro/src/migrations",
    "packages/grpc-api-client/src/gen",
  ],
}
