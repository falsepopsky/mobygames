import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://falsepopsky.github.io',
  base: 'mobygames',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    starlight({
      title: '@untidy/mobygames',
      description: 'Client library for MobyGames API in Node.js',
      favicon: '/favicon.ico',
      logo: {
        src: './src/assets/whale.png',
        replacesTitle: true,
      },
      defaultLocale: 'root',
      social: {
        github: 'https://github.com/falsepopsky/mobygames',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Getting Started', link: '/guides/getting-started' },
            {
              label: 'Prerequisites',
              link: '/guides/prerequisites',
              badge: {
                text: 'Important',
                variant: 'caution',
              },
            },
            { label: 'Supported Endpoints', link: '/guides/supported-endpoints' },
            { label: 'FAQ', link: '/guides/faq' },
          ],
        },
        {
          label: 'API',
          items: [
            {
              label: 'Introduction',
              link: '/api/',
              badge: {
                text: 'Important',
                variant: 'caution',
              },
            },
            {
              label: 'Update your API key',
              link: '/api/key',
              badge: {
                text: 'New',
                variant: 'note',
              },
            },
            {
              label: 'Games',
              collapsed: true,
              autogenerate: {
                directory: '/api/games/',
              },
            },
            {
              label: 'Genres',
              collapsed: true,
              items: [
                {
                  label: 'genres',
                  link: '/api/genres',
                },
              ],
            },
            {
              label: 'Groups',
              collapsed: true,
              items: [
                {
                  label: 'groups',
                  link: '/api/groups',
                },
              ],
            },
            {
              label: 'Platforms',
              collapsed: true,
              items: [
                {
                  label: 'platforms',
                  link: '/api/platforms',
                },
              ],
            },
          ],
        },
      ],
      customCss: ['./src/tailwind.css'],
    }),
  ],
});
