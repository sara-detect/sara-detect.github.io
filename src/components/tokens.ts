// Shared design tokens (from the SARA·Detect .dc.html template).
export const serif = "'Spectral', serif";
export const sans = "'Libre Franklin', sans-serif";
export const mono = "'JetBrains Mono', monospace";

export const c = {
  maroon: '#6e0f1a',
  maroonDark: '#520a12',
  maroon2: '#9a1b2a',
  ink: '#1a1614',
  body: '#56504b',
  muted: '#847a72',
  line: '#e7e3dd',
  cream: '#f7f5f2',
  gold: '#f9c80e',
};

// base url (handles project-subpath deploys); always ends with '/'
export const base = import.meta.env.BASE_URL;
// build an internal href from a route like '' (home) or 'research'
export const href = (route: string) => `${base}${route}`;

export const NAV = [
  { route: '', label: 'Home', key: 'home' },
  { route: 'research', label: 'Research', key: 'research' },
  { route: 'publications', label: 'Publications', key: 'publications' },
  { route: 'team', label: 'Team', key: 'team' },
] as const;

export type PageKey = (typeof NAV)[number]['key'];
