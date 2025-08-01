import { defineConfig, devices, type Project } from '@playwright/test';

/* Configuración básica */
const rawLocale = process.env.LOCALE ?? '';
const supportedLocales = ['es', 'en'];
const LOCALE: string = supportedLocales.includes(rawLocale) ? rawLocale : 'es';

function getBaseUrl(locale: string) {
  const base = process.env.BASE_URL || 'https://www.bluebananabrand.com';
  return locale === 'es' ? base : `${base}/${locale}`;
}
const devicesList = [
  { name: 'Desktop Chrome', device: devices['Desktop Chrome'] },
  { name: 'Desktop Firefox', device: devices['Desktop Firefox'] },
  { name: 'Desktop Safari', device: devices['Desktop Safari'] },
  { name: 'Mobile Chrome', device: devices['Pixel 5'] },
  { name: 'Mobile Safari', device: devices['iPhone 12'] },
];

// Genera un proyecto por combinación de dispositivo + idioma
const projects: Project[] = [];

for (const locale of supportedLocales) {
  for (const { name, device } of devicesList) {
    projects.push({
      name: `${name} - ${locale}`,
      use: {
        ...device,
        locale,
        baseURL: getBaseUrl(locale),
      },
    });
  }
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'on-failure' }]],
  timeout: 120_000,
  use: {
    trace: process.env.CI ? 'on-first-retry' : 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: getBaseUrl(LOCALE),
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 5 * 1000,
    navigationTimeout: 10 * 1000,
    ignoreHTTPSErrors: true,
  },
  projects
});
