import baseConfig from "../eslint.config.js";
import nodePlugin from "eslint-plugin-node";

export default {
  ...baseConfig,
  plugins: {
    ...baseConfig.plugins,
    node: nodePlugin,
  },
  rules: {
    "node/no-missing-import": "error",
    "node/no-unsupported-features/es-syntax": "error",
  },
};
