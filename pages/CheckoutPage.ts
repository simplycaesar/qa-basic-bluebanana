// pages/CheckoutPage.ts
import { Page } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async fillAddress() {
        // Simulamos un checkout de invitado. Rellená según tu flujo real.
        await this.page.getByLabel(/Email/i).fill('qa@test.com');
        await this.page.getByLabel(/Dirección/i).fill('Calle Falsa 123');
        await this.page.getByLabel(/Ciudad/i).fill('Madrid');
        await this.page.getByLabel(/Código Postal/i).fill('28001');
        await this.page.getByLabel(/Teléfono/i).fill('600123123');
        await this.page.getByRole('button', { name: /Continuar|Continue/i }).click();
    }

    async selectShipping() {
        await this.page.getByRole('button', { name: /Continuar con el pago/i }).click();
    }

    async payWith(method: 'Tarjeta' | 'PayPal') {
        await this.page.getByRole('button', { name: method }).click();
        // Agregá aquí la lógica si hay que meter datos de tarjeta simulada
    }

    successMessage() {
        return this.page.getByText(/Gracias por tu compra|Thank you for your order/i);
    }
}
