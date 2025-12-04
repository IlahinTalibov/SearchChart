import type { ProcessOptions } from 'postcss';

const config: ProcessOptions = {
  plugins: {
    '@tailwindcss/postcss': {}, // Use the new plugin package
    autoprefixer: {},
  },
};

export default config;
