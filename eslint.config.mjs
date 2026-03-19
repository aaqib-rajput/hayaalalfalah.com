import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/coverage/**",
      "**/src/generated/**",
      "frontend/app/feed/**",
      "frontend/app/community/**",
      "frontend/app/shura/**",
      "frontend/app/admin/community/**",
      "frontend/app/test-route/**",
      "frontend/components/feed/**",
      "frontend/components/community/**",
      "frontend/lib/feed-store.ts",
      "frontend/lib/shura-store.ts",
      "frontend/lib/shura-mock-data.ts",
      "frontend/lib/webrtc-service.ts",
    ],
  },
  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);
