import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('from Carousel', async ({ page }) => {
  await page
    .getByAltText(/basketball/i)
    .nth(1)
    .click();
  await expect(page).toHaveURL(/basketball/);

  await page.getByRole('button', { name: 'cart' }).click();
  await expect(page.getByRole('alertdialog')).toBeVisible();
  await expect(
    page.getByRole('alertdialog').getByRole('button', { name: 'ok' })
  ).toBeFocused();
  await page
    .getByRole('alertdialog')
    .getByRole('button', { name: 'ok' })
    .click();
  await expect(page.getByRole('alertdialog')).not.toBeVisible();

  await page.getByRole('button', { name: 'm' }).click();
  await page.getByRole('button', { name: 'cart' }).click();
  await expect(page.getByTestId('toast')).toBeVisible();

  await page.getByRole('button', { name: 'bag' }).click();
  await expect(page).toHaveURL('cart');

  await expect(page.getByText('basketball shoes')).toBeVisible();
  await page.getByRole('button', { name: 'delete' }).click();
  await expect(page.getByText('basketball shoes')).not.toBeVisible();

  await expect(page.getByText('unfortunate')).toBeVisible();
  await page.getByRole('button', { name: 'get shoes' }).click();
  await expect(page).toHaveURL('all-shoes');
});

test('from Catalog', async ({ page }) => {
  await page.goto('/all-shoes');
  await expect(page).toHaveURL('all-shoes');

  await page.getByAltText(/muddy/i).click();
  await expect(page).toHaveURL(/muddy/);

  await page.getByRole('button', { name: 'L', exact: true }).click();
  await page.getByRole('button', { name: 'cart' }).click();
  await expect(page.getByTestId('toast')).toBeVisible();
  await expect(page.getByLabel('cart quantity')).toBeVisible();

  await page.getByRole('button', { name: 'bag' }).click();
  await expect(page).toHaveURL('cart');

  await expect(page.getByText('muddy boots')).toBeVisible();
  await expect(page.getByLabel('item quantity')).toHaveText('1');
  await expect(page.getByLabel('item price')).toHaveText('195€');
  await expect(page.getByLabel('cart total')).toHaveText('195');

  await page.getByRole('button', { name: 'change quantity' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page
    .getByRole('dialog')
    .getByRole('button', { name: 'add quantity' })
    .click();
  await expect(page.getByLabel('item quantity')).toHaveText('2');
  await expect(page.getByLabel('cart total')).toHaveText('390');
  await page.getByRole('dialog').press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();

  await page.getByRole('button', { name: 'checkout' }).click();
  await expect(page).toHaveURL('404');
});
