import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Header', () => {
  test('logo', async ({ page }) => {
    await expect(page.getByLabel(/logo/i)).toBeVisible();
  });

  test('shopping bag', async ({ page }) => {
    await expect(page.getByLabel(/bag/i)).toBeVisible();
  });

  test('nav', async ({ page }) => {
    await expect(page.getByLabel(/main/i)).toBeVisible();
    await expect(page.getByTestId('viewport')).toBeHidden();
    await expect(page.getByLabel(/main/i).getByRole('button')).toHaveText([
      'Shoes',
      'Blog',
      'About',
    ]);

    //* don't duplicate the RTL tests
    //* test the nav here

    // const navLinks = await page
    //   .getByRole('button')
    //   .filter({ has: page.getByRole('button') })
    //   .all();
    // navLinks.forEach((navItem) => {
    await expect(page.getByRole('button', { name: 'shoes' })).toHaveAttribute(
      'data-state',
      'closed'
    );
    // await navItem.hover();
    // await expect(navItem).toHaveAttribute('data-state', 'open');
    // await expect(page.getByTestId('viewport')).toBeVisible();
    // await navItem.blur();
    // await expect(navItem).toHaveAttribute('data-state', 'closed');
    // await expect(page.getByTestId('viewport')).toBeHidden();
    // });
  });
});
