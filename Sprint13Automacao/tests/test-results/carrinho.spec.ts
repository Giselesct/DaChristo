import {   expect, test } from "@playwright/test";
//Colocar um produto dentro do Carrinho

test('Colocando produto no carrinho',async ({page}) =>{
    
    await test.step ('login',async ()=> {

    await page.goto ('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    });
});


test('Retirando o  produto no carrinho',async ({page}) =>{

await test.step ('login',async ()=> {

    await page.goto ('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();

    });
  
});
