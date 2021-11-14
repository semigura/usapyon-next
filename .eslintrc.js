module.exports = {
  root: true,
  parser: "eslint-config-next/parser",
  parserOptions: {
    requireConfigFile: false,
    sourceType: "module",
    allowImportExportEverywhere: true,
    babelOptions: {
      presets: ["next/babel"],
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@next/next/recommended",
    "plugin:cypress/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [".next/", "examples/", "node_modules/", "public/"],
  rules: {
    "no-console": ["error", { allow: ["error"] }],
    "import/no-unresolved": ["error", { ignore: ["^@"] }],
    "import/no-default-export": "error",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["state", "res"] },
    ],
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": ["error", { assert: "either" }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          ".storybook/**",
          "cypress/**",
          "test/**",
          "**/*stor@(y|ies).[tj]sx",
          "**/*.test.ts",
          ".eslintrc.js",
          "next.config.js",
          "postcss.config.js",
        ],
      },
    ],
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        "newlines-between": "always",
        groups: ["builtin", "external", "parent", "sibling", "index"],
        pathGroups: [
          { pattern: "react", group: "external", position: "before" },
          { pattern: "@/**", group: "external", position: "after" },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
      },
    ],
    // TODO: img 要素を Next.js 組み込みの Image コンポートに置き換えたいですね
    "@next/next/no-img-element": "off",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: ["plugin:@typescript-eslint/recommended"],
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
        tsconfigRootDir: ".",
      },
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            argsIgnorePattern: "^_",
          },
        ],
      },
    },
    {
      files: [
        "**/test/**/*.ts",
        "**/test/**/*.js",
        "**/__tests__/**/*.ts",
        "**/__tests__/**/*.js",
        "**/*.spec.ts",
        "**/*.spec.js",
      ],
      env: {
        "cypress/globals": true,
      },
      rules: {
        "import/extensions": "off",
        "import/no-unresolved": "off",
      },
    },
    {
      files: ["src/pages/**/*.ts", "src/pages/**/*.tsx"],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "error",
      },
    },
    {
      files: ["*.js", "*.jsx"],
      rules: { "@typescript-eslint/no-var-requires": "off" },
    },
    {
      files: ["**/*.stories.tsx"],
      rules: {
        "import/no-anonymous-default-export": "off",
        "import/no-default-export": "off",
      },
    },
    {
      files: ["**/components/**/*.ts", "**/components/**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
