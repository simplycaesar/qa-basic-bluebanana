// pages/ProductPage.ts
import { Page } from '@playwright/test';

export class ProductPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectSize(size: string) {
        await this.page.getByRole('button', { name: size }).click();
    }

    async addToCart() {
        await this.page.getByRole('button', { name: /Añadir al carrito|Add to cart/i }).click();
    }
}
