import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('sections', () => {
  test('add section', async ({ page }) => {
    const button = page.locator('text=Add Sections');
    const forms = page.locator('form');

    await expect(forms).toHaveCount(1);
    await button.click();
    await expect(forms).toHaveCount(2);
  });

  test('delete section', async ({ page }) => {
    const button = page.locator('text=Delete');
    const forms = page.locator('form');

    await expect(forms).toHaveCount(1);
    await button.click();
    await expect(forms).toHaveCount(0);
  });
});

test('generate', async ({ page }) => {
  const button = page.locator('text=Generate');
  const random = page.locator('[aria-label="output"]');

  await expect(random).toHaveText('Random String');
  await button.click();
  await expect(random).not.toHaveText('Random String');
});
