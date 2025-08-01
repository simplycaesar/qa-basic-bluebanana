/* // tests/login.spec.ts

import { test, expect } from '@playwright/test';

test('Login con credenciales válidas', async ({ page }) => {
  await page.goto('/account/login');

  await page.getByLabel('Correo electrónico').fill('testuser@example.com');
  await page.getByLabel('Contraseña').fill('password123');
  await page.getByRole('button', { name: /Iniciar sesión/i }).click();

  await expect(page.getByText(/Mi cuenta|Mis pedidos/i)).toBeVisible();
});
 */