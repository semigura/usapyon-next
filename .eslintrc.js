module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: ".",
    sourceType: "module",
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["node_modules/"],
  settings: {
    "import/resolver": "webpack",
  },
  rules: {
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
  },
};
