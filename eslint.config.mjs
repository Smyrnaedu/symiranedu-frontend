// eslint.config.ts

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ✅ Next.js + TypeScript önerilen ayarlarla başlat
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Genel ignore ve kurallar
  {
    ignores: ["**/.next/**", "**/node_modules/**"],
    rules: {
      // ✅ any tipi için kural kapalı
      "@typescript-eslint/no-explicit-any": "off",

      // ✅ Boş object tipine izin ver
      "@typescript-eslint/no-empty-object-type": "off",

      // ✅ Function tipi kullanımını engelleme
      "@typescript-eslint/no-unsafe-function-type": "off",

      // ✅ Kullanılmayan değişken uyarılarını kapatma (dilersen yorum satırına alabilirsin)
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
];

export default eslintConfig;
