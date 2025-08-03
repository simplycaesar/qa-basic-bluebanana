// pages/LoginPage.ts

import { Page, expect, test } from '@playwright/test';
import type { LanguageCode, LoginOption } from '../types/types';
import { extractFromI18n } from '../utils/functions';
import { loginConfig } from '../assets/config';

export class LoginPage {
    readonly page: Page;
    readonly options: Record<string, LoginOption>;
    readonly locale: LanguageCode;
    readonly validEmail: string;
    readonly validPassword: string;

    constructor(page: Page) {
        this.page = page;
        this.options = loginConfig;
        this.locale = (test.info().project.use.locale as LanguageCode) ?? 'es';
        this.validEmail = process.env.LOGIN_EMAIL!;
        this.validPassword = process.env.LOGIN_PASSWORD!;
    }

    async openLoginForm() {
        await this.page.getByRole('link', { name: 'Iniciar sesión' }).click();
    }

    async login() {

        const email = 'info@gmail.com';//process.env.LOGIN_EMAIL!;
        const password = 'omg'//process.env.LOGIN_PASSWORD!;

        const emailLabel = this.getEmailLabel('default');
        const passwordLabel = this.getPasswordLabel('default');
        const loginButton = this.getLoginButton('default');

        await this.page.getByRole('textbox', { name: emailLabel }).fill(email);
        await this.page.getByRole('textbox', { name: passwordLabel }).fill(password);
        await this.page.getByRole('button', { name:  loginButton}).click(); 
    }

    getLoginUrl(option: keyof typeof this.options): string {
        return this.options[option].loginUrl[this.locale];
    }
    getLoginTitle(option: keyof typeof this.options): string {
        return this.options[option].loginTitle[this.locale];
    }
    getLoggedUrl(option: keyof typeof this.options): string {
        return this.options[option].loggedUrl[this.locale];
    }
    getLoggedTitle(option: keyof typeof this.options): string {
        return this.options[option].loggedTitle[this.locale];
    }
    getEmailLabel(option: keyof typeof this.options): string {
        return this.options[option].emailLabel[this.locale];
    }
    getPasswordLabel(option: keyof typeof this.options): string {
        return this.options[option].passwordLabel[this.locale];
    }
    getLoginButton(option: keyof typeof this.options): string {
        return this.options[option].loginButton[this.locale];
    }
}
