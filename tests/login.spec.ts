// tests/login.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const VALID_EMAIL = process.env.LOGIN_EMAIL!;
const VALID_PASSWORD = process.env.LOGIN_PASSWORD!;

test.describe('Login', () => {
  test('Usuario puede iniciar sesión correctamente', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await loginPage.openLoginForm();
    //await loginPage.login(VALID_EMAIL, VALID_PASSWORD);

  });
});
