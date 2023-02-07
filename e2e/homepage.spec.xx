import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Home page', async ({ page }) => {
  await expect(page).toHaveTitle(/unfunk/i);
  await expect(page.locator('h1')).toContainText(/shoes/i);
});

test.describe('Collection page links', () => {
  test('Casual Collection link', async ({ page }) => {
    await page.getByRole('link', { name: 'casual collection' }).click();
    await expect(page).toHaveURL(/collect/);
    await expect(page.getByText('casual collection')).toBeVisible();
  });
  test('Work Collection link', async ({ page }) => {
    await page.getByRole('link', { name: 'work collection' }).click();
    await expect(page).toHaveURL(/collect/);
    await expect(page.getByText('work collection')).toBeVisible();
  });
  test('Dress Collection link', async ({ page }) => {
    await page.getByRole('link', { name: 'dress collection' }).click();
    await expect(page).toHaveURL(/collect/);
    await expect(page.getByText('dress collection')).toBeVisible();
  });
});

test.describe('Blog page links', () => {
  test('event link', async ({ page }) => {
    await page.getByRole('link', { name: 'event' }).click();
    await expect(page).toHaveURL(/blog/);
    await expect(page.getByText('unfunktion')).toBeVisible();
  });
  test('moodboard link', async ({ page }) => {
    await page.getByRole('link', { name: 'moodboard' }).click();
    await expect(page).toHaveURL(/blog/);
    await expect(page.getByText('moodboard: autumn')).toBeVisible();
  });
  test('street style link', async ({ page }) => {
    await page.getByRole('link', { name: 'street' }).click();
    await expect(page).toHaveURL(/blog/);
    await expect(page.getByText('street style')).toBeVisible();
  });
});
