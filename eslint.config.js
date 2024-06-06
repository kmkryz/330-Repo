import eslintPluginImport from "eslint-plugin-import";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  // Base ESLint configuration
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        es6: true,
        browser: true,
        node: true,
      },
    },
    rules: {
      // Copy rules from `eslint:recommended`
      "no-unsafe-finally": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "valid-typeof": ["error", { requireStringLiterals: true }],
      // Other custom rules
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "res|next|^err",
        },
      ],
      "arrow-body-style": ["error", "as-needed"],
      "no-param-reassign": [
        "error",
        {
          props: false,
        },
      ],
      "no-console": "warn",
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "func-names": "off",
      "space-unary-ops": "error",
      "space-in-parens": "error",
      "space-infix-ops": "error",
      "comma-dangle": "off",
      "max-len": "off",
      "import/extensions": "off",
      "no-underscore-dangle": "off",
      "consistent-return": "off",
      radix: "off",
      "no-shadow": [
        "error",
        {
          hoist: "all",
          allow: ["resolve", "reject", "done", "next", "err", "error"],
        },
      ],
      "no-unused-expressions": "off",
    },
    plugins: {
      import: eslintPluginImport,
      prettier: eslintConfigPrettier,
    },
  },
  // Add Prettier configuration to avoid conflicts
  eslintConfigPrettier,
];
