export async function waitForNopCommerce(page) {
  await page.waitForFunction(
    () => !/Just a moment|security verification/i.test(document.title + document.body.innerText),
    null,
    { timeout: 60000 }
  ).catch(() => {});
}

export async function testLoginForm(page, email, password) {
  const emailInput = page.locator('#Email');
  const passwordInput = page.locator('#Password');
  const loginButton = page.locator('button.login-button');

  await emailInput.fill(email);
  await passwordInput.fill(password);
  await loginButton.click();
  await waitForNopCommerce(page);

  return page.locator('body');
}

export async function searchProduct(page, searchText) {
  const searchBox = page.locator('#small-searchterms');
  const searchButton = page.locator('button.search-box-button');

  await searchBox.fill(searchText);
  await searchButton.click();
  await waitForNopCommerce(page);
}
