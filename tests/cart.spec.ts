/* // tests/cart.spec.ts

import { test, expect } from '@playwright/test';
//import { getI18n } from '../assets/i18n';

//const t = getI18n();

test('Ver y comprobar carrito', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: t.viewProduct }).first().click();
  await page.getByRole('button', { name: t.addToCart }).click();
  await page.getByRole('link', { name: t.viewCart }).click();

  await expect(page.getByText(t.total)).toBeVisible();
});
 */