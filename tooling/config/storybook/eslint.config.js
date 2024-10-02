import { configs, defineConfig } from "@v1/eslint";

export default defineConfig(
  ...configs.base,
  ...configs.react,
  ...configs.storybook,
);
