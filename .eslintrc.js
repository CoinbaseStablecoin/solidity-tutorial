module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
    mocha: true,
  },
  globals: {
    artifacts: "readonly",
    contract: "readonly",
    assert: "readonly",
    web3: true,
  },
  overrides: [
    {
      files: ["**/*.js"],
      extends: [
        "eslint:recommended",
        "standard",
        "plugin:prettier/recommended",
      ],
      rules: {
        "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "prettier/prettier": "warn",
        "no-var": "error",
        camelcase: "off",
      },
    },
  ],
};
