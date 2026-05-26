// @ts-check

export async function openStorePage(page, route) {
  await page.goto(route, { waitUntil: 'domcontentloaded' });
}
