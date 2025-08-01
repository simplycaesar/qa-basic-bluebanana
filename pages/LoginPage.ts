// pages/LoginPage.ts

import { Page, test } from '@playwright/test';
import type { LanguageCode } from '../types/types';
import { extractFromI18n } from '../utils/functions';

export class LoginPage {
    readonly page: Page;
    readonly locale: LanguageCode;

    constructor(
        page: Page
    ) {
        this.page = page;
        this.locale = (test.info().project.use.locale as LanguageCode) ?? 'es';
    }

    async openLoginForm() {
        await this.page.locator('a.header__icon--account[href="/account/login"]').click();
    }

    /* async login(email: string, password: string) {
        await this.page.getByLabel(extractFromI18n('login.emailLabel')).fill(email);
        await this.page.getByLabel(extractFromI18n('passwordLabel')).fill(password);
        await this.page.getByRole('button', { name: extractFromI18n('submit') }).click();
    } */

    /* async expectSuccess() {
        await this.page.getByText(this.t('successText')).waitFor({ timeout: 5000 });
    } */
}
