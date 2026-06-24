// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// HOSTING: root site (<name>.github.io) -> base '/'.
// If you deploy to a PROJECT repo (e.g. toqitahamid.github.io/acidosis/),
// set base: '/acidosis/' and site accordingly. That's the only change needed —
// all links/assets use import.meta.env.BASE_URL.
export default defineConfig({
  site: 'https://sara-detect.github.io',
  base: '/',
  integrations: [react()],
});
