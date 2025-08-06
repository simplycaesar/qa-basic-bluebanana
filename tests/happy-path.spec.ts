// tests/happy-path.spec.ts
import { test, expect } from '@playwright/test';
import { MenuPage } from '../pages/MenuPage';
import { CategoryPage } from '../pages/CategoryPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Proceso de compra', () => {
    test('El proceso de compra se puede completar correctamente (happy path)', async ({ page }) => {
        await test.step('Se navega a la página principal', async () => {
            await page.goto('/', {
                timeout: 15000,
                waitUntil: 'domcontentloaded'
            });

        });

        await test.step(`Se navega a la página de categoría Rebajas-Hombre-50`, async () => {
            const menuPage = new MenuPage(page);

            await menuPage.goTo('Rebajas - Hombre - Hasta 50%');
        })

        await test.step('Se selecciona el primer producto', async () => {
            const productPage = new ProductPage(page);
            await page.locator('.grill__item').first().click();
            await page.locator('product-info').getByRole('button', { name: 'Agregar al carrito' }).click();
            await expect(page.getByRole('button', { name: 'Comenzar pedido' })).toBeEnabled();
            await page.getByRole('button', { name: 'Permitir todas' }).click();
            await page.getByRole('button', { name: 'Comenzar pedido' }).click();
        })

    })

})


test('Flujo completo de compra (happy path)', async ({ page }) => {
    const categoryPage = new CategoryPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await categoryPage.open('hombre');
    await categoryPage.selectProduct('Sudadera negra');

    await productPage.selectSize('M');
    await productPage.addToCart();

    await cartPage.goTo();
    await cartPage.verifyProduct('Sudadera negra');
    await cartPage.proceedToCheckout();

    await checkoutPage.fillAddress();
    await checkoutPage.selectShipping();
    await checkoutPage.payWith('Tarjeta');

    await expect(checkoutPage.successMessage()).toBeVisible();
});
