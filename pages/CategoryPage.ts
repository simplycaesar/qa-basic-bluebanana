// pages/CategoryPage.ts
import { Page } from '@playwright/test';

export class CategoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open(categorySlug: string) {
        await this.page.goto(`/collections/${categorySlug}`);
    }

    async selectProduct(productName: string) {
        await this.page.getByRole('link', { name: productName }).click();
    }
}
