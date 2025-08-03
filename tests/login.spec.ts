// tests/login.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Gestión de cuenta de usuario', () => {
  test('Usuario puede iniciar sesión correctamente', async ({ page }) => {
    const loginPage = new LoginPage(page);

    const loginUrl = loginPage.getLoginUrl('default');
    const loginTitle = loginPage.getLoginTitle('default');
    await test.step('Se navega a la página de inicio de sesión', async () => {
      await page.goto('/', {
        timeout: 15000,
        waitUntil: 'domcontentloaded'
      });

      await loginPage.openLoginForm();
      await expect.soft(page, 'La URL de la página de inicio de sesión no es la esperada').toHaveURL(loginUrl);
      await expect.soft(page, 'El título de la página de inicio de sesión no es la esperada').toHaveTitle(loginTitle);
    });

    await test.step('Se introducen las credenciales de inicio de sesión', async () => {
      const emailLabel = loginPage.getEmailLabel('default');
      const passwordLabel = loginPage.getPasswordLabel('default');
      
      await expect(page.getByRole('textbox', { name: emailLabel }), 'No se ha encontrado el campo de Correo electrónico').toBeVisible();
      await expect(page.getByRole('textbox', { name: passwordLabel }), 'No se ha encontrado el campo de Contraseña').toBeVisible();

      await loginPage.login();

    });
  });
});
