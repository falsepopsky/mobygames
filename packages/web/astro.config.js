import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: false }),
    starlight({
      title: '@untidy/mobygames',
      description: 'Client library for MobyGames API in Node.js',
      favicon: '/favicon.ico',
      logo: {
        src: './src/assets/favicon.ico',
        replacesTitle: true,
      },
      defaultLocale: 'root',
      social: {
        github: 'https://github.com/falsepopsky/mobygames',
      },
      customCss: ['./src/tailwind.css'],
    }),
  ],
});
