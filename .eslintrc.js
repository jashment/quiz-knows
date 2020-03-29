module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
  ],
  plugins: ["vue"],
  rules: {
    "no-console": "off",
    "no-debugger": "off"
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018
  }
};
