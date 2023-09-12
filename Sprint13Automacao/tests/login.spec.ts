import {   expect, test } from "@playwright/test";

test('O login do usuário feito com sucesso',async ({ page  }) => {
        await page.goto('https://www.saucedemo.com/');
        expect(await page.title()).toBe('Swag Labs');
      
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');

        await page.locator('[data-test="login-button"]').click();
        await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');

        const productTitle = await page.locator ('.header_secondary_container > span');
        await expect (productTitle).toHaveText('Products');


});


test('O login do usuário feito sem sucesso',async ({ page  }) => {
        await page.goto('https://www.saucedemo.com/');

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('revelado_sauce');

        await page.locator('[data-test="login-button"]').click();
        const errorText = await page.getByText('Epic sadface: Epic sadface: Username and password do not match any user in this service');



});