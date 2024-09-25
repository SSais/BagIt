import { test, expect } from '@playwright/test';

test('test for unloaded google map', async ({ page }) => {
  await page.goto('https://baggit-app-8hir.vercel.app/home');
  await expect(page.getByText('This page can\'t load Google')).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('div:nth-child(3) > div:nth-child(3)').first().click();
  await expect(page.getByText('Visit Next')).toBeVisible()
});