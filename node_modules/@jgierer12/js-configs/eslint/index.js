module.exports = {
  extends: [`standard`, `prettier`, `prettier/standard`],
  plugins: [`prettier`, `import`],
  rules: {
    // formatting
    "prettier/prettier": `warn`,
    quotes: [`warn`, `backtick`],

    // development
    "no-console": [`error`, { allow: [`info`, `warn`, `error`] }],

    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/no-default-export": `error`,
  },
};
