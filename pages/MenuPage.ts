// pages/MenuPage.ts
import { Page, test } from '@playwright/test';
import { menuConfig } from '../assets/config';
import type {
    LanguageCode,
    MenuOption,
    MenuActionStep,
} from '../types/types';

export class MenuPage {
    readonly page: Page;
    readonly options: Record<string, MenuOption>;
    readonly locale: LanguageCode;

    constructor(page: Page) {
        this.page = page;
        this.options = menuConfig;
        this.locale = (test.info().project.use.locale as LanguageCode) ?? 'es';
    }

    private getLocator(step: MenuActionStep) {
        const { locator } = step;

        switch (locator.type) {
            case 'role':
                return this.page.getByRole(locator.role, {
                    name: locator.name[this.locale],
                });
            case 'id':
                return this.page.locator(`#${locator.id}`);
            case 'testid':
                return this.page.locator(`[data-testid="${locator.testId}"]`);
            case 'text':
                return this.page.getByText(locator.text[this.locale]);
        }
    }

    async goTo(option: keyof typeof this.options) {
        const { steps } = this.options[option];

        for (const step of steps) {
            await this.page.waitForTimeout(150);

            const locator = this.getLocator(step);
            await locator.waitFor({ state: 'visible' });
            if (step.type === 'hover') {
                await locator.hover();
            } else {
                await locator.click();
            }
        }
    }

    getExpectedUrl(option: keyof typeof this.options): string {
        return this.options[option].expectedUrl[this.locale];
    }

    getExpectedTitle(option: keyof typeof this.options): string {
        return this.options[option].title[this.locale];
    }
}
