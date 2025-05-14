import baseConfig from "../eslint.config.js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default {
  ...baseConfig,
  ignores: [...baseConfig.ignores, ".vite"],
  files: ["**/*.{ts,tsx}"],
  languageOptions: {
    ...baseConfig.languageOptions,
    globals: { ...globals.browser, ...globals.node },
    project: "./tsconfig.json",
  },
  plugins: {
    ...baseConfig.plugins,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  extends: [...baseConfig.extends, reactHooks.configs.recommended],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/prop-types": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
