/* // tests/checkout.spec.ts

import { test, expect } from '@playwright/test';
import { i18n } from './helpers/locales';

const LOCALE = process.env.LOCALE || 'es';
const t = i18n[LOCALE] || i18n['es'];

test.describe('Checkout - flujo básico de compra', () => {
    test('Añadir producto al carrito y llegar al checkout', async ({ page }) => {
        await page.goto('/');

        await page.getByRole('link', { name: t.viewProduct }).first().click();

        const addToCart = page.getByRole('button', { name: t.addToCart });
        await addToCart.scrollIntoViewIfNeeded();
        await addToCart.click();

        const viewCart = page.getByRole('link', { name: t.viewCart });
        if (await viewCart.isVisible()) {
            await viewCart.click();
        }

        await expect(page.getByText(t.total)).toBeVisible();

        const checkoutBtn = page.getByRole('button', { name: t.checkout });
        await expect(checkoutBtn).toBeVisible();
    });
});
 */