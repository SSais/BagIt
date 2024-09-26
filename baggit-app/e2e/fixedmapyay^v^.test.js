import { test, expect } from '@playwright/test';

test('frontpage presentation', async ({ page }) => {
  await page.goto('https://baggit-app.vercel.app/home');

  const homepageElements = [
    page.locator('div').filter({ hasText: 'Search' }).nth(1),
    page.getByPlaceholder('Enter location to search'),
    page.getByRole('button', { name: 'Search' }),
    page.getByRole('button', { name: 'Current Location' }),
    page.getByText('Home Booking Account'),
    page.getByRole('link', { name: 'home Home' }),
    page.getByRole('link', { name: 'booking Booking' }),
    page.getByRole('link', { name: 'account Account' })
  ];

  for (const element of homepageElements) {
    await expect(element).toBeVisible();
  }
});

test('User Journey', async ({ page }) => {
    await page.goto('https://baggit-app.vercel.app/home');
    await page.getByPlaceholder('Enter location to search').click();
    await page.getByPlaceholder('Enter location to search').fill('birmingham');
    await page.getByPlaceholder('Enter location to search').press('Enter');
    await page.getByRole('button', { name: 'Search' }).click();
    await page.locator('div:nth-child(3) > div:nth-child(3)').first().click();
    await page.getByRole('button', { name: 'Details' }).click();
    await page.getByRole('link', { name: 'Terms and Conditions' }).click();
    await page.getByRole('link', { name: 'Privacy Policy' }).click();
})

test('store info presentation', async ({ page }) => {
  await page.goto('https://baggit-app.vercel.app/storeinfo');
await expect(page.getByText('Opening times: Mon-Fri 9:00 - 20:00')).toBeVisible();
await expect(page.getByRole('heading', { name: 'About Bag Storage App' })).toBeVisible()
await expect(page.getByText('Pay Now')).toBeVisible()
});
