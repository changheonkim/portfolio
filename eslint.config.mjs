import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  "plugin:prettier/recommended",  // Prettier 설정 추가
];

const eslintPlugins = [
  ...compat.plugins("prettier"),  // Prettier 플러그인 추가
];

export default {
  ...eslintConfig,
  plugins: eslintPlugins,
};
