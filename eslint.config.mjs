// @ts-check
import pluginTailwindCss from 'eslint-plugin-tailwindcss';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  // your custom configs
}).append(
  pluginTailwindCss.configs['flat/recommended'],
);
