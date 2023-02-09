import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Carousel', async ({ page }) => {
  await page.getByAltText('ordinary').nth(1).click();
  await expect(page).toHaveURL(/ordinary/);

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

  await expect(page.getByText('ordinary shoes')).toBeVisible();
  await page.getByRole('button', { name: 'delete' }).click();
  await expect(page.getByText('ordinary shoes')).not.toBeVisible();

  await expect(page.getByText('unfortunate')).toBeVisible();
  await page.getByRole('button', { name: 'get shoes' }).click();
  await expect(page).toHaveURL('all-shoes');
});
