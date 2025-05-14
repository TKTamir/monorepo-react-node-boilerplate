import eslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";

export default {
  ignores: ["dist", "node_modules"],
  files: ["**/*.ts", "**/*.tsx"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: eslintParser,
  },
  plugins: {
    "@typescript-eslint": eslintPlugin,
  },
  extends: [eslintPlugin.configs.recommended, prettierConfig],
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
  },
};
