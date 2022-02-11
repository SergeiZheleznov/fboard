import { defineConfig } from 'twind';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
    },
  },
  preflight: {
    '@import': `url('https://fonts.googleapis.com/css2?amily=Roboto:ital,wght@0,400;0,700;1,400&display=swap')`,
  }
});
