// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site : 'https://iptv-kastje-kopen.nl',
  trailingSlash:'always',
  integrations: [react(), sitemap({ changefreq: "weekly", priority: 0.9, lastmod: new Date() }), tailwind()]
});