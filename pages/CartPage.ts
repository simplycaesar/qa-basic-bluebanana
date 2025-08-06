// pages/CartPage.ts
import { Page, expect } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goTo() {
        await this.page.goto('/cart');
    }

    async verifyProduct(name: string) {
        await expect(this.page.getByText(name)).toBeVisible();
    }

    async proceedToCheckout() {
        await this.page.getByRole('button', { name: /finalizar compra|checkout/i }).click();
    }
}
