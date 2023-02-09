import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Shoes nav', () => {
  test('All Shoes', async ({ page }) => {
    await page.getByRole('button', { name: 'shoes' }).hover();
    await expect(page.getByTestId('viewport')).toBeVisible();
    await page
      .getByTestId('viewport')
      .getByRole('link', { name: 'all' })
      .click();
    await expect(page).toHaveURL('all-shoes');
  });

  test('Casual Collection', async ({ page }) => {
    await page.getByRole('button', { name: 'shoes' }).hover();
    await expect(page.getByTestId('viewport')).toBeVisible();
    await page
      .getByTestId('viewport')
      .getByRole('link', { name: 'casual' })
      .click();
    await expect(page).toHaveURL('collections/casual');
  });

  test('Work Collection', async ({ page }) => {
    await page.getByRole('button', { name: 'shoes' }).hover();
    await expect(page.getByTestId('viewport')).toBeVisible();
    await page
      .getByTestId('viewport')
      .getByRole('link', { name: 'work' })
      .click();
    await expect(page).toHaveURL('collections/work');
  });

  test('Dress Collection', async ({ page }) => {
    await page.getByRole('button', { name: 'shoes' }).hover();
    await expect(page.getByTestId('viewport')).toBeVisible();
    await page
      .getByTestId('viewport')
      .getByRole('link', { name: 'dress' })
      .click();
    await expect(page).toHaveURL('collections/dress');
  });
});

test.describe('Blog nav', () => {
  test('Event', async ({ page }) => {
    await page.getByRole('button', { name: 'blog' }).hover();
    await expect(page.getByTestId('viewport')).toBeVisible();
    await page
      .getByTestId('viewport')
      .getByRole('link', { name: 'unfunktion' })
      .click();
    await expect(page).toHaveURL('blog/event');
  });

  test('Moodboard', async ({ page }) => {
    await page.getByRole('button', { name: 'blog' }).hover();
    await expect(page.getByTestId('viewport')).toBeVisible();
    await page
      .getByTestId('viewport')
      .getByRole('link', { name: 'moodboard' })
      .click();
    await expect(page).toHaveURL('blog/moodboard');
  });

  test('Street Style', async ({ page }) => {
    await page.getByRole('button', { name: 'blog' }).hover();
    await expect(page.getByTestId('viewport')).toBeVisible();
    await page
      .getByTestId('viewport')
      .getByRole('link', { name: 'street' })
      .click();
    await expect(page).toHaveURL('blog/street');
  });

  test('Hanging Around', async ({ page }) => {
    await page.getByRole('button', { name: 'blog' }).hover();
    await expect(page.getByTestId('viewport')).toBeVisible();
    await page
      .getByTestId('viewport')
      .getByRole('link', { name: 'hanging' })
      .click();
    await expect(page).toHaveURL('blog/hanging');
  });
});

test.describe('About nav', () => {
  test('About Us', async ({ page }) => {
    await page.getByRole('button', { name: 'about' }).hover();
    await expect(page.getByTestId('viewport')).toBeVisible();
    await page
      .getByTestId('viewport')
      .getByRole('link', { name: 'about' })
      .click();
    await expect(page).toHaveURL('about');
  });

  test('Shipping', async ({ page }) => {
    await page.getByRole('button', { name: 'about' }).hover();
    await expect(page.getByTestId('viewport')).toBeVisible();
    await page
      .getByTestId('viewport')
      .getByRole('link', { name: 'shipping' })
      .click();
    await expect(page).toHaveURL('404');
  });

  test('Returns', async ({ page }) => {
    await page.getByRole('button', { name: 'about' }).hover();
    await expect(page.getByTestId('viewport')).toBeVisible();
    await page
      .getByTestId('viewport')
      .getByRole('link', { name: 'returns' })
      .click();
    await expect(page).toHaveURL('404');
  });

  test('FAQ', async ({ page }) => {
    await page.getByRole('button', { name: 'about' }).hover();
    await expect(page.getByTestId('viewport')).toBeVisible();
    await page
      .getByTestId('viewport')
      .getByRole('link', { name: 'faq' })
      .click();
    await expect(page).toHaveURL('404');
  });
});

test('Logo nav', async ({ page }) => {
  await page.getByRole('button', { name: 'shoes' }).hover();
  await expect(page.getByTestId('viewport')).toBeVisible();
  await page.getByTestId('viewport').getByRole('link', { name: 'all' }).click();
  await expect(page).toHaveURL('all-shoes');
  await page.getByRole('banner').getByRole('link').first().click();
  await expect(page).toHaveURL('/');
});

test('Bag nav', async ({ page }) => {
  await page.getByRole('button', { name: 'bag' }).click();
  await expect(page).toHaveURL('cart');
});
