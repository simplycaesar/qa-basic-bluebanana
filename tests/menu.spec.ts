// tests/menu.spec.ts

import { test, expect } from '@playwright/test';
import { MenuPage } from '../pages/MenuPage';
import { menuConfig } from '../assets/config';

test.describe('Navegación', () => {
    test('Cada opción de menú lleva a la página correcta', async ({ page }) => {
        const menuPage = new MenuPage(page);

        for (const optionKey of Object.keys(menuConfig) as Array<keyof typeof menuConfig>) {
            await test.step(`Click en opción del menú: ${optionKey}`, async () => {

                await page.goto('/', {
                    timeout: 15000,
                    waitUntil: 'domcontentloaded'
                });
                await menuPage.goTo(optionKey);

                await expect.soft(page, `La URL al usar la opción de menú ${optionKey} no es la esperada`).toHaveURL(menuPage.getExpectedUrl(optionKey));
                await expect.soft(page, `El título al usar la opción de menú ${optionKey} no es el esperado`).toHaveTitle(menuPage.getExpectedTitle(optionKey));
            });
        }
    });
});
