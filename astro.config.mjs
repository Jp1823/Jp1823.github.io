// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Repositório Jp1823/Jp1823.github.io → servido na raiz do domínio.
// Se mudares para outro nome de repositório (ex.: "website"), adiciona: base: '/website'
export default defineConfig({
	site: 'https://jp1823.github.io',
	trailingSlash: 'always',
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'pt',
				locales: { pt: 'pt-PT', en: 'en' },
			},
		}),
	],
});
